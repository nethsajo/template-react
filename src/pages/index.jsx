import React from 'react';

const AsyncHome = React.lazy(() => import('modules/home'));

const HomePage = () => {
  return <AsyncHome />;
};

export default HomePage;
