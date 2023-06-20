import React from "react";
import { useState } from "react";

const AddCollaboratorForm = ({ colaborators, setColaborators, showAddColaborator, handleAddColaborator, boardData, setBoardData, boardId }) => {
  const [colaboratorName, setColaboratorName] = useState("");

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
    <>
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
    </>
  );
};

export default AddCollaboratorForm;
