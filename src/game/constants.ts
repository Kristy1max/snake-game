// TODO: mby move this file somewhere | src ? 

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
  UpdateFood: "UpdateFood"
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

export const FoodTypes = [
  {
    type: 'cristal',
    price: 100,
    color: "aqua"
  },
  {
    type: 'apple',
    price: 50,
    color: "red"
  },
  {
    type: 'peach',
    price: 150,
    color: "orange"
  },
] as const;

export const FoodLife = {
  MIN: 500,
  MAX: 30_000
} as const;
