import Card from './Card';

import { SAMPLES } from 'shared/constants/samples';

const Samples = () => {
  return (
    <div className="container mx-auto">
      <p className="mb-6 text-2xl font-bold text-slate-500">Samples</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {SAMPLES.map(sample => {
          return (
            <Card
              key={sample.id}
              title={sample.title}
              link={sample.link}
              description={sample.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Samples;
