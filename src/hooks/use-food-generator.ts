import { ActionsMap, FoodLife, FoodTypes, GameStatusMap } from "@/game/constants";
import type { GameAction, GameState, Point } from "@/game/types";
import { getRandomElement, getRandomNumber } from "@/utils";
import { useEffect, useRef } from "react";

export function useFoodGenerator(
  dispatch: React.Dispatch<GameAction>,
  state: GameState,
  isEnabled: boolean = true,
) {
  const stateRef = useRef<GameState>(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // TODO: restricted if not enabled
    const generateFood = () => {
      const now = Date.now();
      const { foods = [], snake, board, status } = stateRef.current;
      if (status === GameStatusMap.Running) {

        const remainingFood = foods ? foods.filter((item) => item.createdAt + item.lifeTimeMS >= now) : [];

        let position: Point;
        do {
          position = {
            x: Math.floor(Math.random() * board.width),
            y: Math.floor(Math.random() * board.height),
          };
        } while (
          snake.some((seg) => seg.x === position.x && seg.y === position.y) || remainingFood.some((item) => item.position.x === position.x && item.position.y === position.y)
        )

        const { type, price } = getRandomElement(FoodTypes);

        dispatch({
          type: ActionsMap.UpdateFood,
          payload: [
            ...remainingFood,
            {
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
              type,
              position,
              createdAt: Date.now(),
              lifeTimeMS: getRandomNumber(FoodLife.MIN, FoodLife.MAX),
              price
            }
          ]
        })
      }
    }

    timerRef.current = setInterval(generateFood, 3000)
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;

      }
    }
  }, [isEnabled, dispatch])
}