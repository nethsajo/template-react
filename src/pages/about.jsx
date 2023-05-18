import { PrivateRoute } from 'modules/partials';
import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/about'));

const AboutPage = () => {
  return (
    <PrivateRoute>
      <AsyncAbout />;
    </PrivateRoute>
  );
};

export default AboutPage;
