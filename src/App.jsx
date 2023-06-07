import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/HomePage/Dashboard';
import Barang from './pages/HomePage/Barang';
import Kategori from './pages/HomePage/Kategori';
import TransaksiJual from './pages/HomePage/TransaksiJual';
import LaporanPenjualan from './pages/HomePage/LaporanPenjualan';
import PengaturanToko from './pages/HomePage/PengaturanToko';
import Profile from './pages/HomePage/Profile';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* PUBLIC ROUTE */}
        <Route path="login" element={<LoginPage />} />

        {/* PROTECTED ROUTE */}
        <Route element={<DashboardLayout />}>
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

        <Route path="*" element={<div>MISSING</div>} />
      </Route>
    </Routes>
  );
}

export default App;
