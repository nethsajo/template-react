import React from 'react';

const AsyncHome = React.lazy(() => import('@Modules/home'));

const HomePage = () => {
  return <AsyncHome />;
};

export default HomePage;
