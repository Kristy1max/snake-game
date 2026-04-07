import { GameStatusMap } from "./constants";
import type { GameState, Point } from "./types";

export default function gameStep(state: GameState): GameState {
  const head = state.snake[0];
  const moves = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 }
  };
  const move = moves[state.direction];

  if (state.wall) {
    const newHead: Point = { x: head.x + move.x, y: head.y + move.y };

    // Logic to die when hit the wall:
    if (newHead.x < 0 || newHead.y < 0 || newHead.x >= state.board.width || newHead.y >= state.board.height) {
      return {
        ...state,
        status: "GAME_OVER"
      }
    }
  }

  // Teleports itself when hits the wall (not sure i get this math )
  const newHead: Point = {
    x: (head.x + move.x + state.board.width) % state.board.width,
    y: (head.y + move.y + state.board.height) % state.board.height
  }

  let remainingFood = state.foods ? [...state.foods] : []; 

  const eatenFood = remainingFood.find((food) => food.position.x === newHead.x && food.position.y === newHead.y)

  const newSnake: Point[] = [newHead, ...state.snake];

  // Movement of snake to next cell
  if (!eatenFood) {
    newSnake.pop();
  }

  if (eatenFood) {
    remainingFood = remainingFood.filter((food) => eatenFood.id !== food.id)
  }

  // It dies on self collision
  const hitItself = newSnake
    .slice(1)
    .some(segment => segment.x === newHead.x && segment.y === newHead.y)

  if (hitItself) {
    return {
      ...state,
      status: GameStatusMap.GameOver
    }
  }

  return {
    ...state,
    snake: newSnake,
    foods: remainingFood,
    score: eatenFood ? state.score + 1 : state.score, // will be price later
  }
}
