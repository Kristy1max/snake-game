import { gameStatusMap } from "./constants";
import type { GameState, Point } from "./types";

/* 
✅ Moved constants from types into constants.ts file
✅ Clean up types a bit
✅ Updated  type GameStatus to sync it with  gameStatusMap
✅ 🍩 Transparent/Loop walls added new state: new wrappedHead - need a dive
✅ Bites itself => Game Over (if its own Point than over)

TODO: 
Read plot of game & mby think do sth else
Push work on github
**/

export default function gameStep(state: GameState): GameState {
  const head = state.snake[0];
  const moves = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 }
  };
  const move = moves[state.direction];

  const newHead: Point = { x: head.x + move.x, y: head.y + move.y };

  // Logic to die when hit the wall:
  // if (newHead.x < 0 || newHead.y < 0 || newHead.x >= state.board.width || newHead.y >= state.board.height) {
  //   return {
  //     ...state,
  //     status: "GAME_OVER"
  //   }
  // }

  // Teleports itself when hits the wall (not sure i get this math )
  const wrappedHead: Point = {
    x: (newHead.x + state.board.width) % state.board.width,
    y: (newHead.y + state.board.height) % state.board.height
  }

  const newSnake: Point[] = [wrappedHead, ...state.snake];
  newSnake.pop();

  // It dies on self collision
  const hitItself = newSnake
    .slice(1)
    .some(segment => segment.x === wrappedHead.x && segment.y === wrappedHead.y)
  
  if (hitItself) {
    return {
      ...state,
      status: gameStatusMap.GameOver
    }
  }

  return {
    ...state,
    snake: newSnake,
  }
}
