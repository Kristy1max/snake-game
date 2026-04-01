import type { actionsMap, gameStatusMap } from "./constants";

export type Direction = "UP" | "DOWN" | "RIGHT" | "LEFT"

export type GameStatus = typeof gameStatusMap[keyof typeof gameStatusMap];

// Not used atm
// export type Actions = "TICK" | "CHANGE_DIRECTION" | "PAUSE" | "RESUME" | "RESET"

export interface Point {
  x: number;
  y: number;
};
export interface Board {
  width: number;
  height: number;
};
export interface GameState {
  board: Board;
  snake: Point[];
  food: Point;
  direction: Direction;
  status: GameStatus;
  score: number;
  speed: number;
};

export type GameAction = 
  | {type: typeof actionsMap.Tick}
  | { type: typeof actionsMap.Reset }
  | { type: typeof actionsMap.Pause }
  | { type: typeof actionsMap.Resume }
  | {
      type: typeof actionsMap.ChangeDirection;
      payload: Direction;
  };
