import { Login } from 'modules/authentication';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/commons';
import { useUserStore } from 'shared/store';

export default function LoginPage() {
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (isSignedIn) return <Navigate to={ROUTES.ABOUT} />;

  return <Login />;
}
