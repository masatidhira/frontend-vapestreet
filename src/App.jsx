import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/HomePage/Dashboard';
import DataBarang from './pages/HomePage/DataBarang';
import Kategori from './pages/HomePage/Kategori';
import KeranjangJual from './pages/HomePage/KeranjangJual';
import LaporanBulanan from './pages/HomePage/LaporanBulanan';
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
          <Route path="data-barang" element={<DataBarang />} exact />
          <Route path="kategori" element={<Kategori />} exact />
          <Route path="transaksi-jual" element={<KeranjangJual />} exact />
          <Route path="laporan-penjualan" element={<LaporanBulanan />} exact />
          <Route path="pengaturan-toko" element={<PengaturanToko />} exact />
          <Route path="profile" element={<Profile />} exact />
        </Route>

        <Route path="*" element={<div>MISSING</div>} />
      </Route>
    </Routes>
  );
}

export default App;
