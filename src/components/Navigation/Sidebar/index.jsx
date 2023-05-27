import { useState } from 'react';
import { VscTriangleRight } from 'react-icons/vsc';
import {
  TbDashboard,
  TbDatabase,
  TbArrowsExchange,
  TbSettings,
} from 'react-icons/tb';

import './Sidebar.scss';

const Sidebar = () => {
  const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
  const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);

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
          <li className="nav-link">
            <TbDashboard className="icon" />
            <p>Dashboard</p>
          </li>
          <hr />
          <li className="nav-dropdown mb-1">
            <button
              className="dropdown-button"
              onClick={() => setIsOpenDropdown1(!isOpenDropdown1)}
            >
              <TbDatabase className="icon" />
              <p>Data Master</p>
              <VscTriangleRight className="icon-arrow" />
            </button>
            <ul
              className={
                isOpenDropdown1 ? 'dropdown-links' : 'dropdown-links closed'
              }
            >
              <li>Barang</li>
              <li>Kategori</li>
            </ul>
          </li>
          <li className="nav-dropdown">
            <button
              className="dropdown-button"
              onClick={() => setIsOpenDropdown2(!isOpenDropdown2)}
            >
              <TbArrowsExchange className="icon" />
              <p>Transaksi</p>
              <VscTriangleRight className="icon-arrow" />
            </button>
            <ul
              className={
                isOpenDropdown2 ? 'dropdown-links' : 'dropdown-links closed'
              }
            >
              <li>Transaksi Jual</li>
              <li>Laporan Penjualan</li>
            </ul>
          </li>
          <hr />
          <li className="nav-link">
            <TbSettings className="icon" />
            <p>Pengaturan Toko</p>
          </li>

          <hr />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
