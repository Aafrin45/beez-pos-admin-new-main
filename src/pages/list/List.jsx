import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import {
  productColumns,
  productRows,
  userColumns,
  userRows,
} from '../../datatablesource';
import { useEffect, useState } from 'react';

const List = ({ page }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable title={'Users'} cols={userColumns} rows={userColumns} />
      </div>
    </div>
  );
};

export default List;
