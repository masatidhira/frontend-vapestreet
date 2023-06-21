import { Routes, Route } from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import ProtectedLayout from './layout/ProtectedLayout';

import LoginPage from './pages/LoginPage';
import MissingPage from "./pages/MissingPage"

import Dashboard from './components/Sections/Dashboard';
import Barang from './components/Sections/Barang';
import Kategori from './components/Sections/Kategori';
import TransaksiJual from './components/Sections/TransaksiJual';
import LaporanPenjualan from './components/Sections/LaporanPenjualan';
import PengaturanToko from './components/Sections/PengaturanToko';
import Profile from './components/Sections/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* PUBLIC ROUTE */}
        <Route path="login" element={<LoginPage />} />

        {/* PROTECTED ROUTE */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="barang" element={<Barang />} exact />
          <Route path="kategori" element={<Kategori />} exact />
          <Route path="transaksi-jual" element={<TransaksiJual />} exact />
          <Route
            path="laporan-penjualan"
            element={<LaporanPenjualan />}
            exact
          />
          <Route path="pengaturan-toko" element={<PengaturanToko />} exact />
          <Route path="profile" element={<Profile />} exact />
        </Route>

        {/* MISSING ROUTE */}
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
