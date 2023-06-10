/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VscTriangleDown } from 'react-icons/vsc';
import { RxAvatar } from 'react-icons/rx';
import { CgLogOut } from 'react-icons/cg';
import ButtonOne from '../Buttons/ButtonOne';
import ButtonLogout from '../Buttons/ButtonLogout';
import './Header.scss';

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <header className="header">
      <div className="content">
        <div className="logo">VAPES STREET</div>
        <div className="dropdown">
          <RxAvatar className="avatar" />
          <ButtonOne
            className="dropdown-button"
            onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          >
            <p>Admin</p>
            <VscTriangleDown />
          </ButtonOne>
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
            <ButtonLogout>
              <CgLogOut className="icon" />
              <p>Logout</p>
            </ButtonLogout>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
