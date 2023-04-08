import { Footer, Navbar } from '@Modules/partials';
import React from 'react';

export const PageLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="main-container">{children}</main>
    <Footer />
  </>
);
