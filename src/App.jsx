import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootLayout } from 'modules/layouts';
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';

const App = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: 1250,
            staleTime: 1000 * 60 * 10,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      </RootLayout>
    </QueryClientProvider>
  );
};

export default App;
