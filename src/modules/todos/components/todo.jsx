import { RxPencil1, RxTrash } from 'react-icons/rx';

const Todo = ({ title }) => {
  return (
    <div className="flex items-center rounded-md bg-[#f2f4f7] p-4">
      <span className="flex-1">{title}</span>
      <div className="ml-auto flex items-center space-x-4">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebeef2] bg-white text-cyan-500 shadow-[0_1px_3px_rgba(96,108,128,0.05)] transition-all duration-300 ease-linear hover:bg-cyan-600 hover:text-cyan-50"
        >
          <RxPencil1 className="h-5 w-5 fill-current" />
        </button>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebeef2] bg-white text-cyan-500 shadow-[0_1px_3px_rgba(96,108,128,0.05)] transition-all duration-300 ease-linear hover:bg-cyan-600 hover:text-cyan-50"
        >
          <RxTrash className="h-5 w-5 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
