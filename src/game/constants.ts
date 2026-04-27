// TODO: mby move this file somewhere | src ? 

export const GameStatusMap = {
  Running: "RUNNING",
  Paused: "PAUSED",
  GameOver: "GAME_OVER",
  StandBy: "STAND_BY"
} as const;

export const ActionsMap = {
  Tick: "TICK",
  ChangeDirection: "CHANGE_DIRECTION",
  Pause: "PAUSE",
  Resume: "RESUME",
  Reset: "RESET",
  UpdateFood: "UPDATE_FOOD",
  Start: "START",
  End: "END"
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
    color: "#f1f1f1",
    character: "💎"
  },
  {
    type: 'apple',
    price: 50,
    color: "#f7defd",
    character: "🍏"
  },
  {
    type: 'peach',
    price: 150,
    color: "#fdd7d5",
    character: "🍑"
  },
  {
    type: 'grape',
    price: 250,
    color: "#cfe3ca",
    character: "🍇"
  },

] as const;

export const FoodLife = {
  MIN: 500,
  MAX: 30_000
} as const;
