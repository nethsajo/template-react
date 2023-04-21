import { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 0 && setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-6">
        <button type="button" onClick={handleDecrement}>
          <IoRemove />
        </button>
        <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-cyan-500">
          <span className="text-2xl font-extrabold text-cyan-50">{count}</span>
        </div>
        <button type="button" onClick={handleIncrement}>
          <IoAdd />
        </button>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-medium text-slate-500">Counter Playground.</p>
        <button type="button" onClick={handleReset} className="font-bold text-slate-600">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
