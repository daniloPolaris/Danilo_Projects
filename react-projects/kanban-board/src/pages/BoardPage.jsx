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

  const [selectedColaborator, setSelectedColaborator] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("boardData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBoardData(parsedData);
      const url = window.location.href;
      const splitUrl = url.split("/").pop();
      setBoardId(splitUrl);
      if (parsedData[splitUrl].colaborators) setColaborators(parsedData[splitUrl].colaborators);
    }
  }, []);

  const handleBoardSelect = (boardId) => {
    setBoardId(boardId);
    const selectedBoard = boardData[boardId];
    setColaborators(selectedBoard?.colaborators || []);
    // ovde isto za taskove pisem
  };

  const handleAddColaborator = () => {
    setShowAddColaborator(!showAddColaborator);
  };

  const handleColaboratorNameChange = (event) => {
    setColaboratorName(event.target.value);
  };

  const handleAddColaboratorToList = () => {
    if (colaboratorName.trim() !== "") {
      setColaborators((prevState) => [...prevState, colaboratorName]);
      setColaboratorName("");
      const updatedBoardData = [...boardData];
      updatedBoardData[boardId].colaborators = [...colaborators, colaboratorName];
      setBoardData(updatedBoardData);
      localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
    }
  };

  const handleRemoveColaborator = (index) => {
    const updatedColaborators = [...colaborators];
    updatedColaborators.splice(index, 1);
    setColaborators(updatedColaborators);
    const updatedBoardData = [...boardData];
    updatedBoardData[boardId].colaborators = [...updatedColaborators];
    setBoardData(updatedBoardData);
    localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
  };

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
            <div className="text-sm flex">
              {colaborators &&
                colaborators.map((colaborator, index) => (
                  <div
                    className="relative"
                    key={index}
                    onMouseEnter={() => setSelectedColaborator(colaborator)}
                    onMouseLeave={() => setSelectedColaborator(null)}
                  >
                    <span className="p-1 bg-sky-400 flex items-center justify-center w-8 h-8 rounded-full mr-1 text-white">
                      {colaborator &&
                        colaborator
                          .split(" ")
                          .map((name) => name[0].toUpperCase())
                          .join("")}
                    </span>
                    {selectedColaborator === colaborator && (
                      <span className="absolute top-10 left-1/2 transform -translate-x-1/2 w-max bg-white p-2 text-black rounded-md shadow-md">
                        {selectedColaborator}
                      </span>
                    )}
                  </div>
                ))}
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
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col">
            <label htmlFor="colaboratorName" className="mb-3">
              Colaborator Name:
            </label>
            <div className="flex items-center mb-8">
              <input
                type="text"
                id="colaboratorName"
                className="border border-slate-400 focus:outline-none rounded-md p-1.5"
                value={colaboratorName}
                onChange={handleColaboratorNameChange}
              />
              <button className="bg-slate-400 text-white rounded px-3 py-2 ml-2" onClick={handleAddColaboratorToList}>
                Add
              </button>
            </div>
            {colaborators && colaborators.length > 0 && (
              <div className="mb-5">
                {colaborators.map((colaborator, index) => (
                  <div className="flex items-center justify-between mb-2" key={index}>
                    <span>{colaborator}</span>
                    <button
                      className="p-1 bg-red-500 text-white rounded"
                      onClick={() => {
                        handleRemoveColaborator(index);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center">
              <button className="bg-slate-400 py-2 px-8 rounded-md text-white" onClick={handleAddColaborator}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardPage;
