import React from 'react';
import { useSelector } from 'react-redux';

import { selectMenu } from '../selectors/menu';
import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';
import Footer from '../components/navs/Footer';

export interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { containerClassnames } = useSelector(selectMenu);
  return (
    <>
      <div id="app-container" className={containerClassnames}>
        <TopNav />
        <Sidebar />
        <main>
          <div className="container-fluid">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
