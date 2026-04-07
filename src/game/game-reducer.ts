import { ActionsMap, GameStatusMap } from "./constants";
import gameStep from "./game-step";
import { InitialState } from "./initial";
import { type GameAction, type GameState } from "./types";

export default function gameReducer(state: GameState, action: GameAction ) {
  switch (action.type) {
    case ActionsMap.Tick:
      if (state.status !== GameStatusMap.Running) return state;
      return gameStep(state)
    case ActionsMap.ChangeDirection:
      return { ...state, direction: action.payload }
    case ActionsMap.Reset:
      return {...InitialState }
    default:
      return state;
  }
}
