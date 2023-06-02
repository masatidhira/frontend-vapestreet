import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Dashboard from './pages/Dashboard';
import DataBarang from './pages/DataBarang';
import Kategori from './pages/Kategori';
import KeranjangJual from './pages/KeranjangJual';
import LaporanBulanan from './pages/LaporanBulanan';
import PengaturanToko from './pages/PengaturanToko';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/data-barang" element={<DataBarang />} exact />
          <Route path="/kategori" element={<Kategori />} exact />
          <Route path="/transaksi-jual" element={<KeranjangJual />} exact />
          <Route path="/laporan-penjualan" element={<LaporanBulanan />} exact />
          <Route path="/pengaturan-toko" element={<PengaturanToko />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
