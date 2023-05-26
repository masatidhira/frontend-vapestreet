import { VscTriangleRight } from 'react-icons/vsc';
import {
  TbDashboard,
  TbDatabase,
  TbArrowsExchange,
  TbSettings,
} from 'react-icons/tb';

import './Navigation.scss';

function Navigation() {
  return (
    <nav className="main-nav">
      <div className="content">
        <div className="logo">
          <p>
            VAPES
            <br />
            STREET
          </p>
        </div>
        <hr />
        <ul className="nav-links">
          <li>
            <TbDashboard className="icon" />
            <p>Dashboard</p>
          </li>
          <hr />
          <li className="mb-1">
            <TbDatabase className="icon" />
            <p>Data Master</p>
            <VscTriangleRight className="icon" />
          </li>
          <li>
            <TbArrowsExchange className="icon" />
            <p>Transaksi</p>
            <VscTriangleRight className="icon" />
          </li>
          <hr />
          <li>
            <TbSettings className="icon" />
            <p>Pengaturan Toko</p>
          </li>

          <hr />
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
