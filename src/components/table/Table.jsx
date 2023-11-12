import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import OrderService from "../../database/OrderService";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import StatusWidget from "../status/Status";
import PaymentMode from "../PaymentMode/PaymentMode";

const List = () => {
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
      var orderByDate = fmtOrders
        .sort((a, b) => {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        })
        .reverse();
      setData(orderByDate);
    });

    return unsubscribe;
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" style={{ textAlign: "center" }}>
              Bill No
            </TableCell>
            <TableCell className="tableCell" style={{ textAlign: "center" }}>
              Quantity
            </TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell" style={{ textAlign: "right" }}>
              Amount
            </TableCell>
            <TableCell className="tableCell" style={{ textAlign: "center" }}>
              Payment Method
            </TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(0, 5).map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell" style={{ textAlign: "center" }}>
                {row.billNo}
              </TableCell>
              <TableCell className="tableCell" style={{ textAlign: "center" }}>
                {row.totalQty}
              </TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell" style={{ textAlign: "right" }}>
                {row.totalAmount}
              </TableCell>
              <TableCell className="tableCell" style={{ textAlign: "center" }}>
                {row.paymentMode}
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.paymentStatus}`}>
                  {row.paymentStatus}
                </span>
                <paymentMode data ={'{row.paymentMode}'}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table;
