import type { Board, Food, Point } from "@/game/types";
import Meal from "../meal/meal";
// import Meal from "@/components/meal/meal";


interface Props {
  snake: Point[];
  board: Board;
  foods: Food[] | null;
}
function GameBoard({ snake, board, foods }: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: board.width * 20,
        height: board.height * 20,
        border: "1px solid black",
      }
      }
    >
      {
        snake.map((seg, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              left: seg.x * 20,
              top: seg.y * 20,
              background: "green",
            }}
          />
        ))}

      {foods && Boolean(foods?.length) && foods.map((food) =>
        <Meal key={food.id} food={food} />
      )}
    </div>
  );
}
export default GameBoard;
