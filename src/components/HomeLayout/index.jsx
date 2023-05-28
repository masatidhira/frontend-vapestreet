import { Outlet, Navigate } from 'react-router-dom';
import Navigation from '../Navigation';

import './HomeLayout.scss';

const HomeLayout = () => {
  let auth = { token: true };

  return auth.token ? (
    <div className="home">
      <Navigation />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomeLayout;
