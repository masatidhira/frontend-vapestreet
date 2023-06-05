/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { VscTriangleDown } from 'react-icons/vsc';
import { RxAvatar } from 'react-icons/rx';
import { CgLogOut } from 'react-icons/cg';
import useAuth from '../../hooks/useAuth';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { setAuth } = useAuth();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setAuth({});
    navigate(from, { replace: true });
  };

  return (
    <header className="header">
      <div className="content">
        <div className="logo">VAPES STREET</div>
        <div className="dropdown">
          <RxAvatar className="avatar" />
          <button
            className="dropdown-button"
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          >
            <p>Admin</p>
            <VscTriangleDown />
          </button>
        </div>
        <ul
          className={isOpenDropdown ? 'dropdown-menu is-open' : 'dropdown-menu'}
        >
          <li className="mt-1 mb-1">
            <NavLink to="/profile">
              <RxAvatar className="icon" />
              <p>Profile</p>
            </NavLink>
          </li>
          <li>
            <button onClick={(e) => handleLogout(e)}>
              <CgLogOut className="icon" />
              <p>Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
