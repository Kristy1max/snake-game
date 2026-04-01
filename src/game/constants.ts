export const gameStatusMap = {
  Running: "RUNNING",
  Paused: "PAUSED",
  GameOver: "GAME_OVER"
}

export const actionsMap = {
  Tick: "TICK",
  ChangeDirection: "CHANGE_DIRECTION",
  Pause: "PAUSE",
  Resume: "RESUME",
  Reset: "RESET",
} as const;

export const map = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
} as const;
