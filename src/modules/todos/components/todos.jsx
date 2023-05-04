import Todo from './todo';

import { RiTodoLine } from 'react-icons/ri';

export const Todos = ({ todos }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-11 px-6 py-9 sm:px-12">
      <RiTodoLine className="h-16 w-16 text-cyan-500 sm:h-24 sm:w-24" />
      <h1 className="text-center text-4xl font-extrabold text-slate-500 sm:text-6xl">TodoMate</h1>
      <div className="mx-auto w-full max-w-3xl rounded-md border-[#ebeef2] bg-white px-6 py-8 shadow-[0_1px_3px_rgba(96,108,128,0.05)]">
        <div className="space-y-4">
          {todos.map(todo => {
            const title = todo.title[0].toUpperCase() + todo.title.slice(1);
            return <Todo key={todo.id} id={todo.id} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};
