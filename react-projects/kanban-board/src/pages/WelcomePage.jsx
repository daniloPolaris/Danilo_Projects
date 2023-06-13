import { useState, useEffect } from "react";
import CreateBoardForm from "../components/CreateBoardForm";
// import { Link } from "react-router-dom";
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
    <>
      <header className="bg-slate-600 mb-72">
        <div className="flex justify-center items-center max-w-5xl mx-auto my-0 py-2 text-white text-2xl font-serif">
          LOGO
        </div>
      </header>
      <div className="flex flex-col justify-center max-w-5xl mx-auto bg-blue-400 h-full">
        {!showCreateBoard && boardData.length > 0 && (
          <div className="flex flex-wrap justify-center">
            {boardData.map((board, index) => (
              <div key={index} className="m-4 bg-white rounded-md shadow-md p-4 max-w-xs">
                <h3 className="text-lg font-bold">{board.title}</h3>
                <p className="mt-2">{board.description}</p>
              </div>
            ))}
          </div>
        )}
        {!showCreateBoard && <Button buttonText={"CREATE BOARD"} onClick={handleCreateBoardClick} />}
        {showCreateBoard && <CreateBoardForm showCreateBoard={setShowCreateBoard} boardData={boardData} setBoardData={setBoardData}/>}
      </div>
      {/* <Link to="/board">Board Page</Link> */}
    </>
  );
}

export default WelcomePage;
