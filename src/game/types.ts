import type { ActionsMap, GameStatusMap } from "./constants";

export type Direction = "UP" | "DOWN" | "RIGHT" | "LEFT"

export type GameStatus = typeof GameStatusMap[keyof typeof GameStatusMap];

// Not used atm
// export type Actions = "TICK" | "CHANGE_DIRECTION" | "PAUSE" | "RESUME" | "RESET"

export interface Point {
  x: number;
  y: number;
};

// Rename types
export interface Food {
  id: string;
  type: string;
  position: Point;
  createdAt: number;
  lifeTimeMS: number;
  price: number;
}
export interface Board {
  width: number;
  height: number;
};
export interface GameState {
  board: Board;
  snake: Point[];
  foods: Food[] | null;
  direction: Direction;
  status: GameStatus;
  score: number;
  speed: number;
  wall: boolean;
};

export type GameAction = 
  | {type: typeof ActionsMap.Tick}
  | { type: typeof ActionsMap.Reset }
  | { type: typeof ActionsMap.Pause }
  | { type: typeof ActionsMap.Resume }
  | {
      type: typeof ActionsMap.ChangeDirection;
      payload: Direction;
  }
  | {
    type: typeof ActionsMap.UpdateFood;
    payload: Food[]
  }
  | { type: typeof ActionsMap.Start }
