import React from 'react';

const AsyncAbout = React.lazy(() => import('@Modules/about'));

const AboutPage = () => {
  return <AsyncAbout />;
};

export default AboutPage;
