import { Footer, Navbar } from 'modules/partials';

export const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};
