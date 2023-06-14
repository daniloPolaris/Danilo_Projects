import TaskButton from "../components/TaskButton";
import MenuButton from "../components/MenuButton";

function BoardPage() {
  return (
    <div className="flex flex-col h-full bg-blue-400">
      <header className="bg-slate-600">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-2 text-white">
          <MenuButton buttonText={"Boards"}/>
          <span className="text-2xl font-serif">LOGO</span>
          <MenuButton buttonText={"Menu"}/>
        </div>
      </header>
      <div className="bg-white mb-1 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto my-0 py-1">
          <div className="flex items-center">
            <span className="text-2xl pb-1 mr-5">Board title</span>
            <div className="text-sm">
              <span className="p-1 bg-sky-400 rounded-full mr-1">DS</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1">DS</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1">DS</span>
              <span className="p-1 bg-sky-400 rounded-full mr-1">DS</span>
            </div>
          </div>
          <div>
            <TaskButton buttonText={"Create task"} />
            <TaskButton buttonText={"Add colaborator"} />
          </div>
        </div>
      </div>
      <div className="flex flex-grow">
        <div className="flex justify-evenly max-w-7xl mx-auto flex-grow gap-1">
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
    </div>
  );
}

export default BoardPage;
