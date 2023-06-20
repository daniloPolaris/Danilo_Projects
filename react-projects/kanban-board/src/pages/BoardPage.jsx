import { useState, useEffect } from "react";
import TaskButton from "../components/TaskButton";
import MenuButton from "../components/MenuButton";
import BoardsButton from "../components/BoardsButton";
import ColaboratorButton from "../components/ColaboratorButton";
import CreateTaskForm from "../components/CreateTaskForm";
import CollaboratorsList from "../components/CollaboratorsLIst";
import AddCollaboratorForm from "../components/AddCollaboratorForm";
import DragAndDrop from "../components/DragAndDrop";

function BoardPage() {
  const [boardData, setBoardData] = useState([]);
  const [boardId, setBoardId] = useState("");
  const [showAddColaborator, setShowAddColaborator] = useState(false);
  const [colaborators, setColaborators] = useState([]);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("boardData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBoardData(parsedData);
      const url = window.location.href;
      const splitUrl = url.split("/").pop();
      setBoardId(parseInt(splitUrl));
      const board = parsedData[parseInt(splitUrl)];
      if (board && board.colaborators) {
        setColaborators(board.colaborators);
      }
      if (board && board.columns) {
        setColumns(board.columns);
      }
    }
  }, []);

  const handleBoardSelect = (boardId) => {
    setBoardId(boardId);
    const selectedBoard = boardData[boardId];
    setColaborators(selectedBoard?.colaborators || []);
  };

  const handleAddColaborator = () => {
    setShowAddColaborator(!showAddColaborator);
  };

  const handleCreateTaskFormVisibility = () => {
    setShowCreateTask(!showCreateTask);
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
            <CollaboratorsList colaborators={colaborators} />
          </div>
          <div>
            <TaskButton onClick={handleCreateTaskFormVisibility} />
            <ColaboratorButton onClick={handleAddColaborator} />
          </div>
        </div>
      </div>
      <DragAndDrop boardData={boardData} boardId={boardId} setBoardData={setBoardData} />
      <CreateTaskForm
        showCreateTask={showCreateTask}
        columns={columns}
        setColumns={setColumns}
        handleCreateTaskFormVisibility={handleCreateTaskFormVisibility}
        setShowCreateTask={setShowCreateTask}
        boardData={boardData}
        setBoardData={setBoardData}
        boardId={boardId}
        colaborators={colaborators}
      />
      <AddCollaboratorForm
        colaborators={colaborators}
        setColaborators={setColaborators}
        showAddColaborator={showAddColaborator}
        handleAddColaborator={handleAddColaborator}
        boardData={boardData}
        setBoardData={setBoardData}
        boardId={boardId}
      />
    </div>
  );
}

export default BoardPage;
