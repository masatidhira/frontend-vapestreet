import { useState } from 'react';
import { VscTriangleDown } from 'react-icons/vsc';
import { RxAvatar } from 'react-icons/rx';
import { CgLogOut } from 'react-icons/cg';

import './Header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">VAPES STREET</div>
      <div className="dropdown">
        <RxAvatar className="avatar" />
        <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
          <p>Vapes Street</p>
          <VscTriangleDown />
        </button>
      </div>
      <div className={isOpen ? 'dropdown-menu isOpen' : 'dropdown-menu'}>
        <ul>
          <li className="mb-1">
            <RxAvatar className="icon" />
            <p>Profile</p>
          </li>
          <li>
            <CgLogOut className="icon" />
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
