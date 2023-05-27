import { PageLayout } from 'modules/layouts';
import { PrivateRoute } from 'modules/partials';

export default function About() {
  return (
    <PrivateRoute>
      <PageLayout>
        <div className="mt-12">About</div>
      </PageLayout>
    </PrivateRoute>
  );
}
