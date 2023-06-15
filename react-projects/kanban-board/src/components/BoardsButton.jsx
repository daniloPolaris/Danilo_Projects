import { Link } from "react-router-dom";
import { useState } from "react";

function BoardsButton({ boardData, onBoardSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="flex text-lg bg-slate-500 rounded pl-2 pr-4" onClick={toggleMenu}>
        <svg
          className="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z"></path>
        </svg>{" "}
        Boards
      </button>
      {isOpen && (
        <div className="absolute top-8 left-0 w-48 text-white ">
          {boardData.map((board) => (
            <Link
              key={board.id}
              to={`/board/${board.id}`}
              className="pl-4 py-2 rounded bg-slate-500 flex my-2"
              onClick={() => {
                onBoardSelect(board.id);
                toggleMenu();
              }}
            >
              {board.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default BoardsButton;
