import { PrivateRoute } from '@Modules/partials';

import React from 'react';

const AsyncAbout = React.lazy(() => import('@Modules/about'));

const AboutPage = () => {
  return (
    <PrivateRoute>
      <AsyncAbout />;
    </PrivateRoute>
  );
};

export default AboutPage;
