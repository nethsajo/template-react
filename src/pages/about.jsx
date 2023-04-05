import React from 'react';

const AsyncAbout = React.lazy(() => import('@Modules/about'));

const About = () => {
  return <AsyncAbout />;
};

export default About;
