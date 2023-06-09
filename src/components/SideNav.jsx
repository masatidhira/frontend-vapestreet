import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VscTriangleRight } from 'react-icons/vsc';
import {
  TbDashboard,
  TbDatabase,
  TbArrowsExchange,
  TbSettings,
} from 'react-icons/tb';
import Button from './Button';

const SideNav = () => {
  const [isOpenDropdown1, setIsOpenDropdown1] = useState(false);
  const [isOpenDropdown2, setIsOpenDropdown2] = useState(false);

  return (
    <nav className="sidenav">
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
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <hr />
          <li className="nav-dropdown mb-1">
            <Button
              className="dropdown-button"
              onClick={() => setIsOpenDropdown1(!isOpenDropdown1)}
            >
              <TbDatabase className="icon" />
              <p>Data Master</p>
              <VscTriangleRight
                className={isOpenDropdown1 ? 'icon-arrow rotate' : 'icon-arrow'}
              />
            </Button>
            <ul
              className={
                isOpenDropdown1 ? 'dropdown-links' : 'dropdown-links closed'
              }
            >
              <li>
                <NavLink to="/barang">Barang</NavLink>
              </li>
              <li>
                <NavLink to="/kategori">Kategori</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-dropdown">
            <Button
              className="dropdown-button"
              onClick={() => setIsOpenDropdown2(!isOpenDropdown2)}
            >
              <TbArrowsExchange className="icon" />
              <p>Transaksi</p>
              <VscTriangleRight
                className={isOpenDropdown2 ? 'icon-arrow rotate' : 'icon-arrow'}
              />
            </Button>
            <ul
              className={
                isOpenDropdown2 ? 'dropdown-links' : 'dropdown-links closed'
              }
            >
              <li>
                <NavLink to="/transaksi-jual">Transaksi Jual</NavLink>
              </li>
              <li>
                <NavLink to="/laporan-penjualan">Laporan Penjualan</NavLink>
              </li>
            </ul>
          </li>
          <hr />
          <li className="nav-link">
            <TbSettings className="icon" />
            <NavLink to="/pengaturan-toko">Pengaturan Toko</NavLink>
          </li>
          <hr />
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
