
import { useEffect, useReducer } from "react";
import { InitialState } from "@/game/initial";
import gameReducer from "@/game/game-reducer";
import { useGameLoop } from "@/hooks/use-game-loops";

import GameBoard from "@/components/board/board";
import { ActionsMap, GameStatusMap, Map } from "@/game/constants";
import { useFoodGenerator } from "./hooks/use-food-generator";

import styles from "./styles.module.css";

function App() {
  const [state, dispatch] = useReducer(gameReducer, InitialState);
  useFoodGenerator(dispatch, state, state.status === GameStatusMap.Running );

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

  const handleOnReset = () => {
    dispatch({ type: ActionsMap.Reset})
  }

  const handleStart = () => {
    dispatch({ type: ActionsMap.Start })
  }

  const handleEnd = () => {
    if (state.status !== GameStatusMap.Running) return;

    const confirmationModal = window.confirm(`Are you sure you want to end this game?`)

    if (!confirmationModal) return;

    dispatch({ type: ActionsMap.End})
  }

  return (
    <div>
      <h1 className={styles.title}>
        Snake <span>🐍</span>
      </h1>
      <div className={styles.scoreTile}>
        <span className={styles.scoreLabel}>SCORE</span>
        <span className={styles.scoreValue}>{state.score}</span>
      </div>
      <div className={styles.btnsWrapper}>
        <button className={styles.btnPrimary} onClick={handleStart}>
          ▶️ Start
        </button>

        <button className={styles.btnSecondary} onClick={handleOnReset}>
          🔄 Restart
        </button>
        {/* TODO: end game btn */}
        <button className={styles.btnDanger} onClick={handleEnd}>
          🏁 End
        </button>
      </div>
      {/* TODO: check what to do with food instead of state.food!*/}
      <GameBoard snake={state.snake} board={state.board} foods={state.foods} />
    </div>
  )
}

export default App
