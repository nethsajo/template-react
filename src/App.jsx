import { RootLayout } from '@Modules/layouts';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

const App = () => {
  console.log('TEMPLATE: ', process.env.TEMPLATE);
  console.log('ROUTES: ', routes);

  return (
    <RootLayout>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </RootLayout>
  );
};

export default App;
