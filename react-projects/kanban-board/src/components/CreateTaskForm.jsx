import React from "react";
import Button from "./Button";
import { useState } from "react";


const CreateTaskForm = ({ showCreateTask, columns, setColumns, handleCreateTaskFormVisibility, setShowCreateTask, boardData, setBoardData, boardId, colaborators }) => {

  const [showAssignList, setShowAssignList] = useState(false);
  const [title, setTitle] = useState("");
  const [storyPoints, setStoryPoints] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState([]);



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

  const generateUniqueID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };

  const createTaskHandler = (event) => {
    event.preventDefault();

    if (boardData[boardId].columns) {
      setColumns(boardData[boardId].columns);
    }

    const newTask = {
      id: generateUniqueID(),
      title: title,
      storyPoints: storyPoints,
      description: description,
      assignedTo: assignedTo,
    };

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

  return (
    <>
      {showCreateTask && (
        <div className="fixed top-24 left-0 right-0  flex justify-center">
          <form
            className="flex flex-col items-center bg-white rounded-md shadow-md max-w-2xl"
            onSubmit={createTaskHandler}
            id="createTaskForm"
          >
            <h3 className="text-xl  px-52 py-2 mb-6 border-b-2 border-slate-500">Create task</h3>
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
              <Button buttonText={"Close"} type="button" onClick={handleCreateTaskFormVisibility} />
              <Button buttonText={"Save"} />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateTaskForm;
