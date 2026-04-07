import { ActionsMap, GameStatusMap, OppositeDirectionMap } from "./constants";
import gameStep from "./game-step";
import { InitialState } from "./initial";
import { type GameAction, type GameState } from "./types";

export default function gameReducer(state: GameState, action: GameAction ) {
  switch (action.type) {
    case ActionsMap.Tick:
      if (state.status !== GameStatusMap.Running) return state;
      return gameStep(state)
    case ActionsMap.ChangeDirection: {
      const currentMove = state.direction
      const nextMove = action.payload;

      // const isOppositeDirection = (currentMove === "LEFT" && nextMove === "RIGHT") || (currentMove === "RIGHT" && nextMove === "LEFT") || (currentMove === "UP" && nextMove === "DOWN") || (currentMove === "DOWN" && nextMove === "UP");

      // AI clean proposal:
      if (OppositeDirectionMap[currentMove] === nextMove) return state;
      
      return { ...state, direction: nextMove }}
    case ActionsMap.Reset:
      return {...InitialState }
    default:
      return state;
  }
}
