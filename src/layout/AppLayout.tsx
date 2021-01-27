import React from 'react';
import { useSelector } from 'react-redux';

import { selectMenu } from '../selectors/menu';
import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';

export interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
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
    </>
  );
};
