import { useState, useEffect } from "react";
import CreateBoardForm from "../components/CreateBoardForm";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function WelcomePage() {
  const [showCreateBoard, setShowCreateBoard] = useState(false);
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("boardData");
    if (storedData) {
      setBoardData(JSON.parse(storedData));
    }
  }, []);

  const handleCreateBoardClick = () => {
    setShowCreateBoard(true);
  };

  return (
    <div className="flex flex-col h-full">
      <header className="bg-slate-600">
        <div className="flex justify-center items-center max-w-5xl mx-auto my-0 py-2 text-white text-2xl font-serif">
          LOGO
        </div>
      </header>
      <div className="flex flex-col justify-center items-center bg-blue-400 flex-grow gap-8">
        {!showCreateBoard && boardData.length > 0 && (
          <div className={`flex flex-row gap-6 ${boardData.length > 3 ? "overflow-x-scroll" : ""} max-w-3xl`}>
            {boardData.map((board, index) => (
              <Link key={index} to={`/board/${board.id}`}>
                <div className="flex flex-col flex-shrink-0 items-center bg-white rounded-xl shadow-md p-4 h-80 w-60 mb-6">
                  <h3 className="text-xl font-bold py-10">{board.title}</h3>
                  <p>{board.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
        {!showCreateBoard && <Button buttonText={"CREATE BOARD"} onClick={handleCreateBoardClick} />}
        {showCreateBoard && (
          <CreateBoardForm showCreateBoard={setShowCreateBoard} boardData={boardData} setBoardData={setBoardData} />
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
