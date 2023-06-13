import { useState, useEffect } from "react";
import Button from "./Button";

function CreateBoardForm({showCreateBoard, boardData, setBoardData}) {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [columns, setColumns] = useState([{ name: "" }, { name: "" }]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("boardData");
    if (storedData) {
      setBoardData(JSON.parse(storedData));
    }
  }, []);

  const handleNextStep = () => {
    if (title.trim() === "" || description.trim() === "") {
      setErrorMessage("Please provide a title and description.");
      return;
    }
    setErrorMessage("");
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    setErrorMessage("");
  };

  const handleAddColumn = () => {
    setColumns([...columns, { name: "" }]);
  };

  const handleRemoveColumn = (index) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(index, 1);
    setColumns(updatedColumns);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (columns.length < 2) {
      setErrorMessage("Please create at least two columns.");
      return;
    } else if (columns.some((column) => column.name.trim() === "")) {
      setErrorMessage("Please provide a column name.");
      return;
    }
    setErrorMessage("");
    const newBoardData = {
      title: title,
      description: description,
      columns: columns.map((column) => ({ name: column.name })),
    };
    const updatedBoardData = [...boardData, newBoardData];
    setBoardData(updatedBoardData);
    localStorage.setItem("boardData", JSON.stringify(updatedBoardData));
    setStep(1);
    setTitle("");
    setDescription("");
    setColumns([{ name: "" }, { name: "" }]);
    showCreateBoard(false);
  };

  return (
    <>
      <form className="flex flex-col items-center bg-slate-300 rounded-xl shadow-md max-w-2xl" onSubmit={handleSubmit}>
        <h3 className="text-xl bg-slate-500 px-52 py-2 text-white rounded-xl mb-6">Create board</h3>
        
        {errorMessage && <p className="text-red-500 mb-6 bg-slate-100 p-4 rounded-md shadow-md">{errorMessage}</p>}

        {step === 1 && (
          <div>
            <div className="mb-4">
              <label className="pr-32" htmlFor="title">
                Title:
              </label>
              <input
                type="text"
                id="title"
                maxLength={50}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-slate-100"
              />
            </div>

            <div className="mb-10">
              <label className="pr-20" htmlFor="description">
                Description:
              </label>
              <input
                type="text"
                id="description"
                maxLength={200}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-slate-100"
              />
            </div>

            <div>
              <Button buttonText={"Back"} type="button" onClick={() => (showCreateBoard(false))} />
              <Button buttonText={"Next"} type="button" onClick={handleNextStep} />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            {columns.map((column, index) => (
              <div key={index}>
                <input
                  className="ml-10 bg-slate-100"
                  type="text"
                  maxLength={50}
                  value={column.name}
                  onChange={(e) => {
                    const updatedColumns = [...columns];
                    updatedColumns[index].name = e.target.value;
                    setColumns(updatedColumns);
                  }}
                />
                <Button buttonText={"Remove"} type="button" onClick={(e) => handleRemoveColumn(index, e)} />
              </div>
            ))}

            <div>
              <Button buttonText={"Add Column"} type="button" onClick={handleAddColumn} />
              <div>
                <Button buttonText={"Back"} type="button" onClick={handlePreviousStep} />
                <Button buttonText={"Finish"} />
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default CreateBoardForm;
