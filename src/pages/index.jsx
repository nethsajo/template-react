import React from 'react';

const AsyncHome = React.lazy(() => import('modules/home'));

export default function HomePage() {
  return <AsyncHome />;
}
