import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../../components/Header';
import SideNavigation from '../../components/SideNavigation';
import './DashboardLayout.scss';

const DashboardLayout = () => {
  const { auth } = useAuth();
  const location = useLocation();

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

export default DashboardLayout;
