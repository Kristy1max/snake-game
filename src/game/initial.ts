import { GameStatusMap, Wall } from "./constants";
import type { GameState } from "./types";

export const InitialState: GameState = {
  board: {
    width: 20,
    height: 20
  },
  snake: [
    {
      x: 5,
      y: 5
    },
    {
      x: 4,
      y: 5
    },
    {
      x: 3,
      y: 5
    }
  ],
  direction: "RIGHT",
  status: GameStatusMap.StandBy,
  score: 0,
  speed: 200,
  foods: null,
  wall: Wall.OFF
}