import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Navigation() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <>
      <Header
        isOpenDropdown={isOpenDropdown}
        handleDropdown={() => setIsOpenDropdown(!isOpenDropdown)}
      />
      <Sidebar />
    </>
  );
}

export default Navigation;
