import React from 'react';

const AsyncAbout = React.lazy(() => import('@Modules/about'));

const AboutPage = () => <AsyncAbout />;

export default AboutPage;
