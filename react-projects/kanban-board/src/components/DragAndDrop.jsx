import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DragAndDrop = ({boardData, setBoardData, boardId}) => {
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const updatedBoardData = [...boardData];
    const sourceColumnIndex = parseInt(source.droppableId);
    const destinationColumnIndex = parseInt(destination.droppableId);
    const sourceColumn = updatedBoardData[boardId].columns[sourceColumnIndex];
    const destinationColumn = updatedBoardData[boardId].columns[destinationColumnIndex];

    if (sourceColumn && sourceColumn.tasks && sourceColumnIndex !== updatedBoardData[boardId].columns.length - 1) {
      const [removed] = sourceColumn.tasks.splice(source.index, 1);
      destinationColumn.tasks.splice(destination.index, 0, removed);

      setBoardData(updatedBoardData);
      localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
    }
  };
  return (
    <div className="flex flex-grow mb-1">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex justify-evenly max-w-7xl mx-auto flex-grow gap-1">
          {boardData[boardId] &&
            boardData[boardId].columns &&
            boardData[boardId].columns.map((column) => (
              <div className="flex flex-col flex-grow bg-slate-300 rounded shadow-md flex-1" key={column.id}>
                <div className="flex justify-center bg-slate-400 text-slate-800 font-semibold rounded  mb-4 py-2 shadow-md">
                  {column.name}
                </div>
                <Droppable droppableId={column.id} key={column.id}>
                  {(provided) => (
                    <div className="flex-grow" ref={provided.innerRef} {...provided.droppableProps}>
                      {column.tasks &&
                        column.tasks.map((task, taskIndex) => (
                          <Draggable draggableId={task.id} index={taskIndex} key={task.id}>
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
              </div>
            ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;
