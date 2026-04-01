
import { useReducer } from "react"
import { InitialState } from "./game/initial";
import gameReducer from "./game/game-reducer";
import { useGameLoop } from "./hooks/use-game-loops";

import GameBoard from "@/components/board/board";
import { actionsMap, gameStatusMap } from "./game/constants";

function App() {

  const [state, dispatch] = useReducer(gameReducer, InitialState);

  useGameLoop(
    () => dispatch({ type: actionsMap.Tick }),
    state.speed,
    state.status === gameStatusMap.Running
  );

  console.log(state);


  return (
    <div>
      <h1>Snake 🐍</h1>
      <p>Score: 0</p>
      <button>Restart</button>
      <GameBoard snake={state.snake} board={state.board} />
    </div>
  )
}

export default App
