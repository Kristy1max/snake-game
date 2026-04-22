import { FoodTypes } from "@/game/constants";
import type { Food } from "@/game/types";
import styles from "./meal.module.css";

type MealProps= {
  food: Food;
}

export default function Meal({ food }: MealProps) {
  const { position, type } = food;

  const eat = FoodTypes.find((item) => item.type === type);

  return (
    <div
      className={styles.food}
      style={{
        left: position.x * 20,
        top: position.y * 20,
        background: eat?.color
      }}
    >
      {/* //TODO: can style sth else */}
      {eat?.character}
      </div>
  )
}
