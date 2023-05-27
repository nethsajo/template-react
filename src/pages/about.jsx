import { PrivateRoute } from 'modules/partials';
import React from 'react';

const AsyncAbout = React.lazy(() => import('modules/about'));

export default function AboutPage() {
  return (
    <PrivateRoute>
      <AsyncAbout />
    </PrivateRoute>
  );
}
