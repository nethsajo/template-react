import { IoEnterOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Card({ title, description = '', link = '/' }) {
  return (
    <div className="rounded-md border border-[#ebeef2] bg-white p-6 shadow-[0_1px_3px_rgba(96,108,128,0.05)]">
      <div className="mb-4 flex items-center gap-2 text-cyan-700 transition duration-500 ease-linear hover:text-cyan-800">
        <Link to={link} className="text-xl font-bold">
          {title}
        </Link>
        <IoEnterOutline className="current h-6 w-6" />
      </div>
      <p className="font-medium text-slate-400">{description}</p>
    </div>
  );
}
