import { RootLayout } from '@Modules/layouts';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';

const App = () => (
  <RootLayout>
    <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
  </RootLayout>
);

export default App;
