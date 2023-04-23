import { RiTodoLine } from 'react-icons/ri';

const Todos = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-11 px-6 py-9 sm:px-12">
      <RiTodoLine className="h-16 w-16 text-cyan-500 sm:h-24 sm:w-24" />
      <h1 className="text-center text-4xl font-extrabold text-slate-500 sm:text-6xl">TodoMate</h1>
      <div className="mx-auto w-full max-w-3xl rounded-md border-[#ebeef2] bg-white px-6 py-8 shadow-[0_1px_3px_rgba(96,108,128,0.05)]">
        <form>
          <label htmlFor="todo" className="mb-4 flex flex-col">
            <span className="mb-2 font-bold text-slate-500">Task</span>
            <input
              type="text"
              name="todo"
              id="todo"
              className="w-full rounded-sm bg-gray-100 px-4 py-2 font-medium text-slate-500 outline-none"
            />
          </label>
          <label htmlFor="description" className="mb-4 flex flex-col">
            <span className="mb-2 font-bold text-slate-500">Description</span>
            <textarea
              rows={3}
              name="description"
              id="description"
              className="w-full resize-none rounded-sm bg-gray-100 px-4 py-2 font-medium text-slate-500 outline-none"
            />
          </label>
          <div className="mt-8 flex sm:justify-end">
            <button
              type="submit"
              className="w-full rounded-sm bg-cyan-500 px-6 py-2 font-bold text-white sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todos;
