export const GameStatusMap = {
  Running: "RUNNING",
  Paused: "PAUSED",
  GameOver: "GAME_OVER"
} as const;

export const ActionsMap = {
  Tick: "TICK",
  ChangeDirection: "CHANGE_DIRECTION",
  Pause: "PAUSE",
  Resume: "RESUME",
  Reset: "RESET",
} as const;

export const Map = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
} as const;

export const Wall = {
  ON: true,
  OFF: false
} as const;

export const OppositeDirectionMap = {
  LEFT: "RIGHT",
  RIGHT: "LEFT",
  UP: "DOWN",
  DOWN: "UP",
} as const;
