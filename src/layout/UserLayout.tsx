import React, { useEffect } from 'react';

export interface UserLayoutProps {
  children?: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);
  return (
    <>
      <div className="fixed-background" />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default UserLayout;
