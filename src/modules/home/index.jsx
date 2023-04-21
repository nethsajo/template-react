import Counter from './components/Counter';
import Samples from './components/Samples';

import { IoLogoReact } from 'react-icons/io5';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-11 px-6 py-9 sm:px-12">
      <IoLogoReact className="h-16 w-16 text-cyan-500 sm:h-24 sm:w-24" />
      <h1 className="text-center text-4xl font-extrabold text-slate-500 sm:text-6xl">
        Template React
      </h1>
      <Counter />
      <Samples />
    </div>
  );
};

export default Home;
