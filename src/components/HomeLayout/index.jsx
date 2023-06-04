import { Outlet, Navigate } from 'react-router-dom';
import Header from '../Header';
import SideNavigation from '../SideNavigation';

import './HomeLayout.scss';

const HomeLayout = () => {
  let auth = { token: true };

  return auth.token ? (
    <div className="home">
      <Header />
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomeLayout;
