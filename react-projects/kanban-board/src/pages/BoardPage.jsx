import TaskButton from "../components/TaskButton";
import MenuButton from "../components/MenuButton";
import BoardsButton from "../components/BoardsButton";
import { useState, useEffect } from "react";
import ColaboratorButton from "../components/ColaboratorButton";

function BoardPage() {
  const [boardData, setBoardData] = useState([]);
  const [boardId, setBoardId] = useState("");
  const [showAddColaborator, setShowAddColaborator] = useState(false);
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaborators, setColaborators] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("boardData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBoardData(parsedData);
      const url = window.location.href;
      const splitUrl = url.split("/").pop();
      setBoardId(splitUrl);
      setColaborators(parsedData[splitUrl].colaborators);
    }
  }, []);
  

  const handleBoardSelect = (boardId) => {
    setBoardId(boardId);
    const selectedBoard = boardData[boardId];
    setColaborators(selectedBoard?.colaborators || []);
  };
  

  const handleAddColaborator = () => {
    setShowAddColaborator(true);
  };

  const handleColaboratorNameChange = (event) => {
    setColaboratorName(event.target.value);
  };

  const handleAddColaboratorToList = () => {
    if (colaboratorName.trim() !== "") {
      setColaborators([...colaborators, colaboratorName]);
      setColaboratorName("");
    }
  };

  const handleRemoveColaborator = (index) => {
    const updatedColaborators = [...colaborators];
    updatedColaborators.splice(index, 1);
    setColaborators(updatedColaborators);
  };

  const handleColaboratorsData = () => {
    const updatedBoardData = [ ...boardData ];
    updatedBoardData[boardId].colaborators = colaborators;
    setBoardData(updatedBoardData);
    localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
    setShowAddColaborator(false);
  }

console.log(colaborators);
  return (
    <div className="flex flex-col h-full bg-blue-400">
      <header className="bg-slate-600">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-2 text-white">
          <BoardsButton boardData={boardData} onBoardSelect={handleBoardSelect} />
          <span className="text-2xl font-serif">LOGO</span>
          <MenuButton />
        </div>
      </header>
      <div className="bg-white mb-1 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto my-0 py-1">
          <div className="flex items-center">
            <span className="text-2xl pb-1 mr-5">{boardData[boardId] && boardData[boardId].title}</span>
            <div className="text-sm">
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-white">DS</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-white">DS</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-white">DS</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-white">DS</span>
            </div>
          </div>
          <div>
            <TaskButton />
            <ColaboratorButton onClick={handleAddColaborator} />
          </div>
        </div>
      </div>
      <div className="flex flex-grow mb-1">
        <div className="flex justify-evenly max-w-7xl mx-auto flex-grow gap-1">
          <div className="flex-grow bg-slate-300 rounded shadow-md">
            <div className="flex justify-center bg-slate-400 text-slate-800 font-semibold rounded  mb-4 py-2 shadow-md">
              TO-DO
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm text-white">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
          </div>
          <div className="flex-grow bg-slate-300 rounded shadow-md">
            <div className="flex justify-center bg-slate-400 text-slate-800 font-semibold rounded  mb-4 py-2 shadow-md">
              TO-DO
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
          </div>
          <div className="flex-grow bg-slate-300 rounded shadow-md">
            <div className="flex justify-center bg-slate-400 text-slate-800 font-semibold rounded  mb-4 py-2 shadow-md">
              TO-DO
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
          </div>
          <div className="flex-grow bg-slate-300 rounded shadow-md">
            <div className="flex justify-center bg-slate-400 text-slate-800 font-semibold rounded  mb-4 py-2 shadow-md">
              TO-DO
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
            <div className="bg-white flex justify-between items-center rounded mb-2 py-2 mx-1 shadow-md">
              <span className="ml-1">Task1</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1 text-sm">DS</span>
            </div>
          </div>
        </div>
      </div>
      {showAddColaborator && (
        <div className="fixed top-24 left-0 right-0  flex justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <label htmlFor="colaboratorName" className="block mb-2">
              Colaborator Name:
            </label>
            <input
              type="text"
              id="colaboratorName"
              className="border border-slate-400 focus:outline-none rounded-md p-1.5 mb-2"
              value={colaboratorName}
              onChange={handleColaboratorNameChange}
            />
            <button
              className="bg-slate-400 text-white rounded px-3 py-2 ml-2 text-base"
              onClick={handleAddColaboratorToList}
            >
              Add
            </button>
            {colaborators.length > 0 && (
              <div className="mt-4">
                {colaborators.map((colaborator, index) => (
                  <div className="flex items-center" key={index}>
                    <span>{colaborator}</span>
                    <button
                      className="ml-2 p-1 bg-red-500 text-white rounded"
                      onClick={() => handleRemoveColaborator(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button onClick={handleColaboratorsData}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardPage;
