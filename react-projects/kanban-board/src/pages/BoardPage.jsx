import TaskButton from "../components/TaskButton";
import MenuButton from "../components/MenuButton";
import BoardsButton from "../components/BoardsButton";
import { useState, useEffect } from "react";
import ColaboratorButton from "../components/ColaboratorButton";

import Button from "../components/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function BoardPage() {
  const [boardData, setBoardData] = useState([]);
  const [boardId, setBoardId] = useState("");
  const [showAddColaborator, setShowAddColaborator] = useState(false);
  const [colaboratorName, setColaboratorName] = useState("");
  const [colaborators, setColaborators] = useState([]);
  const [hoveredColaborator, setHoveredColaborator] = useState(null);

  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showAssignList, setShowAssignList] = useState(false);
  const [title, setTitle] = useState("");
  const [storyPoints, setStoryPoints] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("boardData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBoardData(parsedData);
      const url = window.location.href;
      const splitUrl = url.split("/").pop();
      setBoardId(parseInt(splitUrl));
      // setColaborators(parsedData[splitUrl].colaborators);
      // setColumns(parsedData[splitUrl].columns);
      const board = parsedData[parseInt(splitUrl)];
      if (board && board.colaborators) {
        setColaborators(board.colaborators);
      }
      if (board && board.columns) {
        setColumns(board.columns);
      }
    }
  }, []);

  // console.log("colaborators:", colaborators);

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

  const handleCreateTask = () => {
    setShowCreateTask(!showCreateTask);
  };

  const handleAssignList = () => {
    setShowAssignList(!showAssignList);
  };

  const handleColaboratorCheckboxChange = (colaborator) => {
    if (assignedTo.includes(colaborator)) {
      setAssignedTo(assignedTo.filter((c) => c !== colaborator));
    } else {
      setAssignedTo([...assignedTo, colaborator]);
    }
  };

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    if (boardData[boardId].columns) {
      setColumns(boardData[boardId].columns);
    }
    // setColumns(boardData[boardId].columns)

    const newTask = {
      id: columns[0]?.tasks?.length + 1 || 1,
      title: title,
      storyPoints: storyPoints,
      description: description,
      assignedTo: assignedTo,
    };
    // console.log("boardId",boardId);
    const updatedColumns = [...columns];
    if (updatedColumns[0] && updatedColumns[0].tasks) {
      updatedColumns[0].tasks.push(newTask);
      const updatedBoardData = [...boardData];
      updatedBoardData[boardId].columns = [...updatedColumns];
      setBoardData(updatedBoardData);
      localStorage.setItem("boardData", JSON.stringify(updatedBoardData));

      setColumns([]);
      setTitle("");
      setStoryPoints("");
      setDescription("");
      setAssignedTo([]);
      setShowCreateTask(false);
    }
  };

  // console.log("title:", title);
  // console.log("storyPoints:", storyPoints);
  // console.log("description:", description);
  // console.log("assignedTo:", assignedTo);
  // console.log("columns:", columns);

  // const handleDragEnd = (result) => {
  //   const { source, destination } = result;

  //   if (!destination) {
  //     return;
  //   }

  //   if (source.droppableId === destination.droppableId && source.index === destination.index) {
  //     return;
  //   }

  //   if (boardData[boardId] && boardData[boardId].columns) {
  //     const updatedColumns = [...boardData[boardId].columns];
  //     const sourceColumn = updatedColumns[source.droppableId];
  //     const destinationColumn = updatedColumns[destination.droppableId];

  //     if (sourceColumn && sourceColumn.tasks) {
  //       const item = sourceColumn.tasks[source.index];
  //       sourceColumn.tasks.splice(source.index, 1);
  //       destinationColumn.tasks.splice(destination.index, 0, item);

  //       const updatedBoardData = [...boardData];
  //       updatedBoardData[boardId].columns = updatedColumns;
  //       setBoardData(updatedBoardData);
  //       localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
  //     }
  //   }
  // };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const updatedBoardData = [...boardData];
    const sourceColumnIndex = parseInt(source.droppableId);
    const destinationColumnIndex = parseInt(destination.droppableId);
    if (updatedBoardData[boardId].columns[sourceColumnIndex] && updatedBoardData[boardId].columns[sourceColumnIndex].tasks) {
    const [removed] = updatedBoardData[boardId].columns[sourceColumnIndex].tasks.splice(source.index, 1);
    updatedBoardData[boardId].columns[destinationColumnIndex].tasks.splice(destination.index, 0, removed);

    setBoardData(updatedBoardData);
    localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
    }
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
                    onMouseEnter={() => setHoveredColaborator(colaborator)}
                    onMouseLeave={() => setHoveredColaborator(null)}
                  >
                    <span className="p-1 bg-sky-400 flex items-center justify-center w-8 h-8 rounded-full mr-1 text-white">
                      {colaborator &&
                        colaborator
                          .split(" ")
                          .map((name) => name[0].toUpperCase())
                          .join("")}
                    </span>
                    {hoveredColaborator === colaborator && (
                      <span className="absolute top-10 left-1/2 transform -translate-x-1/2 w-max bg-white p-2 text-black rounded-md shadow-md">
                        {hoveredColaborator}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </div>
          <div>
            <TaskButton onClick={handleCreateTask} />
            <ColaboratorButton onClick={handleAddColaborator} />
          </div>
        </div>
      </div>
      <div className="flex flex-grow mb-1">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex justify-evenly max-w-7xl mx-auto flex-grow gap-1">
            {boardData[boardId] &&
              boardData[boardId].columns &&
              boardData[boardId].columns.map((column) => (
                <Droppable droppableId={column.id} key={column.id}>
                  {(provided) => (
                    <div
                      className="flex-grow bg-slate-300 rounded shadow-md flex-1"
                      key={column.id}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="flex justify-center bg-slate-400 text-slate-800 font-semibold rounded  mb-4 py-2 shadow-md">
                        {column.name}
                      </div>
                      {column.tasks &&
                        column.tasks.map((task, taskIndex) => (
                          <Draggable draggableId={`${task.id}`} index={taskIndex} key={task.id}>
                            {(provided) => (
                              <div
                                className="bg-white flex justify-between items-center rounded mb-2 py-4 mx-1 shadow-md"
                                key={task.id}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <span className="ml-2">{task.title}</span>
                                <div className="flex justify-end">
                                  {task.assignedTo &&
                                    task.assignedTo.map((collaborator, collaboratorIndex) => (
                                      <span
                                        className="p-1 bg-sky-400 w-7 h-7 flex justify-center items-center rounded-full mr-1 text-sm text-white"
                                        key={collaboratorIndex}
                                      >
                                        {collaborator
                                          .split(" ")
                                          .map((name) => name[0].toUpperCase())
                                          .join("")}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
          </div>
        </DragDropContext>
      </div>

      {showCreateTask && (
        <div className="fixed top-24 left-0 right-0  flex justify-center">
          <form
            className="flex flex-col items-center bg-white rounded-md shadow-md max-w-2xl"
            onSubmit={handleSaveButtonClick}
            id="createTaskForm"
          >
            <h3 className="text-xl  px-52 py-2 mb-6 border-b-2 border-slate-500">Create task</h3>

            {/* {errorMessage && <p className="text-red-500 mb-6 bg-white p-4 rounded-md shadow-md">{errorMessage}</p>} */}
            <div className="mb-4">
              <label className="pr-44 text-lg" htmlFor="title">
                Title:
              </label>
              <input
                type="text"
                id="title"
                maxLength={50}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-white border-slate-500 border rounded p-1 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="pr-64  text-lg" htmlFor="storyPoints">
                Story points:
              </label>
              <input
                type="number"
                id="storyPoints"
                maxLength={2}
                value={storyPoints}
                onChange={(e) => setStoryPoints(e.target.value)}
                className="bg-white w-12 border-slate-500 border rounded p-1 focus:outline-none"
              />
            </div>
            <div className="relative">
              <div>
                <Button buttonText={"Assign"} type="button" onClick={handleAssignList} />
              </div>
              {showAssignList && colaborators && colaborators.length > 0 && (
                <div className="absolute -left-10 bg-white rounded border-2 border-slate-400 border-rounded px-10 pt-2 shadow-sm">
                  {colaborators.map((colaborator) => (
                    <div key={colaborator} className="my-2">
                      <label className="flex items-center gap-6 ">
                        <input
                          className="h-4 w-4"
                          type="checkbox"
                          checked={assignedTo.includes(colaborator)}
                          onChange={() => handleColaboratorCheckboxChange(colaborator)}
                        />
                        {colaborator}
                      </label>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Button buttonText={"Close"} type="button" onClick={handleAssignList} />
                  </div>
                </div>
              )}
            </div>
            <div className="mb-10 flex gap-24">
              <label className="pl-3 pr-3 text-lg" htmlFor="description">
                Description:
              </label>
              <textarea
                type="text"
                id="description"
                maxLength={1000}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-white border-slate-500 border rounded w-48 px-1 mx-3 focus:outline-none"
              />
            </div>
            <div>
              <Button buttonText={"Close"} type="button" onClick={handleCreateTask} />
              <Button buttonText={"Save"} />
            </div>
          </form>
        </div>
      )}

      {showAddColaborator && (
        <div className="fixed top-24 left-0 right-0  flex justify-center">
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col">
            <label htmlFor="colaboratorName" className="mb-3 text-lg">
              Collaborator Name:
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
