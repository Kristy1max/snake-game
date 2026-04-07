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

  const isEating = newHead.x === state.food?.x && newHead.y === state.food.y;
  const newSnake: Point[] = [newHead, ...state.snake];

  if (!isEating) {
    newSnake.pop();
  }

  const newFood = isEating || !state.food
    ? generateFood(newSnake, state.board)
    : state.food;
  
  function generateFood(snake: Point[], board: { width: number; height: number }): Point | null {
    let position: Point;
    do {
      position = {
        x: Math.floor(Math.random() * board.width),
        y: Math.floor(Math.random() * board.height),
      };
    } while (
      snake.some((seg) => seg.x === position.x && seg.y === position.y)
    );
    return position;
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
    food: newFood,
    score: isEating ? state.score + 1 : state.score,
  }
}
