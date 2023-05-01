import { ROUTES } from '@Shared/constants/common';
import { useUserStore } from '@Shared/store';

import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (!isSignedIn) return <Navigate to={ROUTES.HOME} state={{ from: location }} />;

  return children;
};
