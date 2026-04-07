import type { Board, Point } from "@/game/types";


interface Props {
  snake: Point[];
  board: Board;
  food: Point;
}
function GameBoard({ snake, board, food }: Props) {
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

      {food &&
        <div
        style={{
          position: "absolute",
          width: 20,
          height: 20,
          left: food.x * 20,
          top: food.y * 20,
          background: "red",
        }}
      />
      }
    </div>
  );
}
export default GameBoard;
