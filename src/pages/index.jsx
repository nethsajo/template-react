import React from 'react';

const AsyncHome = React.lazy(() => import('@Modules/home'));

const HomePage = () => <AsyncHome />;

export default HomePage;
