import { actionsMap, gameStatusMap } from "./constants";
import gameStep from "./game-step";
import { type GameAction, type GameState } from "./types";

export default function gameReducer(state: GameState, action: GameAction ) {
  switch (action.type) {
    case actionsMap.Tick:
      if (state.status !== gameStatusMap.Running) return state;
      return gameStep(state)
    default:
      return state;
  }
}
