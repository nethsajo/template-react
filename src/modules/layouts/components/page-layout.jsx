import { Footer, Navbar } from '@Modules/partials';

export const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};
