import { FoodTypes } from "@/game/constants";
import type { Board, Food, Point } from "@/game/types";


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

      {/* TODO: make as component */}
      {foods && Boolean(foods?.length) && foods.map((food) => 
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: food.position.x * 20,
            top: food.position.y * 20,
            background: FoodTypes.find((item) => item.type === food.type)?.color, // TODO: change this one with props & images inside
            
          }}
        />
        )}
    </div>
  );
}
export default GameBoard;
