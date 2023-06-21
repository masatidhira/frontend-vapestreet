import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import SideNav from '../components/SideNav';

const ProtectedLayout = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? (
    <div className="home">
      <Header />
      <SideNav />
      <section className="main-section">
        <Outlet />
      </section>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedLayout;
