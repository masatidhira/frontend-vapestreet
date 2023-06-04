import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header';
import SideNavigation from '../SideNavigation';
import './HomeLayout.scss';

const HomeLayout = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth);

  return auth?.user ? (
    <div className="home">
      <Header />
      <SideNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default HomeLayout;
