import Card from '../Card';

const Dashboard = () => {
  const cardData = [
    { title: 'Nama Barang', count: 3, linkText: 'Tabel Barang' },
    { title: 'Stok Barang', count: 326, linkText: 'Tabel Barang' },
    { title: 'Telah Terjual', count: 24, linkText: 'Tabel Laporan' },
    { title: 'Kategori Barang', count: 4, linkText: 'Tabel Kategori' },
  ];

  return (
    <>
      <h1 className="page-title">DASHBOARD</h1>
      <ul className="flex-row">
        {cardData.map((data, i) => (
          <li key={i}>
            <Card
              title={data.title}
              count={data.count}
              linkText={data.linkText}
              link="#"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
