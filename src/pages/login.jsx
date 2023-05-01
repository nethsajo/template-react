import { Login } from '@Modules/authentication';
import { ROUTES } from '@Shared/constants/common';
import { useUserStore } from '@Shared/store';

import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (isSignedIn) return <Navigate to={ROUTES.HOME} />;

  return <Login />;
};

export default LoginPage;
