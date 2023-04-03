import React from 'react';

const AsyncHome = React.lazy(() => import('@Modules/Home'));

const HomePage = () => {
  return <AsyncHome />;
};

export default HomePage;
