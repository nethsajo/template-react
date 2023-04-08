import { PageLayout } from '@Modules/layouts';
import { ReactComponent as ReactSVG } from '@Shared/assets/react.svg';

function Home() {
  return (
    <PageLayout>
      <div className="flex items-center">
        <h2>Home</h2>
        <ReactSVG />
      </div>
    </PageLayout>
  );
}

export default Home;
