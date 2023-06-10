const Barang = () => {
  return (
    <>
      <h1 className="page-title">Data Barang</h1>
      <div className="flex-row">
        <button className="button blue">Insert Data</button>
        <button className="button gold">Sortir Stok Kurang</button>
        <button className="button green">Refresh Data</button>
      </div>
    </>
  );
};

export default Barang;
