
import { useEffect, useReducer } from "react";
import { InitialState } from "@/game/initial";
import gameReducer from "@/game/game-reducer";
import { useGameLoop } from "@/hooks/use-game-loops";

import GameBoard from "@/components/board/board";
import { ActionsMap, GameStatusMap, Map } from "@/game/constants";

function App() {
  const [state, dispatch] = useReducer(gameReducer, InitialState);


  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      const direction = Map[evt.key as keyof typeof Map];
      if (direction) {
        dispatch({ type: ActionsMap.ChangeDirection, payload: direction })
      }
    }

    document.addEventListener("keydown", handleKeyDown)
  }, [])

  useGameLoop(
    () => dispatch({ type: ActionsMap.Tick }),
    state.speed,
    state.status === GameStatusMap.Running
  );

  console.log(state);

  const handleOnReset = () => {
    dispatch({ type: ActionsMap.Reset})
  }

  return (
    <div>
      <h1>Snake 🐍</h1>
      <p>Score: {state.score}</p>
      <button onClick={handleOnReset}>Restart</button>
      {/* TODO: check what to do with food instead of state.food!*/}
      <GameBoard snake={state.snake} board={state.board} food={state.food!} />
    </div>
  )
}

export default App
