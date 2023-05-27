import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants/commons';
import { useUserStore } from 'shared/store';

export function PrivateRoute({ children }) {
  const location = useLocation();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (!isSignedIn) return <Navigate to={ROUTES.HOME} state={{ from: location }} />;

  return children;
}
