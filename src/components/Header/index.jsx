import { VscTriangleDown } from 'react-icons/vsc';
import { RxAvatar } from 'react-icons/rx';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">VAPES STREET</div>
      <div className="dropdown">
        <RxAvatar className="avatar" />
        <p>Vapes Street</p>
        <VscTriangleDown />
      </div>
    </header>
  );
}

export default Header;
