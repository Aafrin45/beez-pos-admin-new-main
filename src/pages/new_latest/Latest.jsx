import './orders.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { orderColumns } from '../../datatablesource';
import { useEffect, useState } from 'react';
import OrderService from '../../database/OrderService';
import { DataGrid } from '@mui/x-data-grid';

const Orders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = OrderService.getAllOrders().then((orders) => {
      const fmtOrders = orders.docs.map((row) => ({
        ...row.data(),
        id: row.id,
        totalAmount: `₹ ${row.data().cartTotal}`,
        createdAt: row.data().createdAt.toDate().toLocaleString(),
        totalQty: row.data().cart.length,
      }));
      var orderByDate = fmtOrders.sort((a, b) => {
        return new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      }).reverse();
      setData(orderByDate);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Latest transaction</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={orderColumns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            rowCount={data.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
