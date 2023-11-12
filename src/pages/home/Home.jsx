import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useState } from "react";
import { useEffect } from "react";
import OrderService from "../../database/OrderService";

const PAYMENT_CASH = "CASH";
const PAYMENT_UPI = "UPI";

const Home = () => {
  const [totalOrders, setTotalOrders] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [totalCashPayment, setTotalCashPayment] = useState();
  const [totalUPIPayment, setTotalUPIPayment] = useState();
  const [todaySales, setTodaySales] = useState();
  const [todayOrder, setTodayOrder] = useState();

  const [chartData, setChartData] = useState();

  useEffect(() => {
    const unsubscribe = OrderService.getAllOrders().then((orders) => {
      const data = orders.docs.map((row) => {
        const order = row.data();
        return {
          orderDate: order.createdAt.toDate().toLocaleDateString("en-US"),
          totalQty: order.cart.length,
          totalAmount: order.cartTotal,
          totalSales: Number.parseFloat(order.cartTotal),
          cash: order.paymentMode === PAYMENT_CASH ? 1 : 0,
          upi: order.paymentMode === PAYMENT_UPI ? 1 : 0,
        };
      });

      setTotalOrders(orders.docs.length);
      setTotalAmount(
        data.map((item) => item.totalSales).reduce((prev, next) => prev + next)
      );
      setTotalCashPayment(
        data.map((item) => item.cash).reduce((prev, next) => prev + next)
      );
      setTotalUPIPayment(
        data.map((item) => item.upi).reduce((prev, next) => prev + next)
      );
      setChartData(data);

      let tdyData = data || [];
      tdyData = data.filter(
        (item) => new Date(item.orderDate).getDate() === new Date().getDate()
      );
      tdyData = tdyData.reduce((a, b) => a + Number(b.totalAmount), 0);
      setTodayOrder(
        data.filter(
          (item) => new Date(item.orderDate).getDate() === new Date().getDate()
        ).length
      );

      setTodaySales(tdyData);
      setChartData(data);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="order" value={totalOrders} todayOrder={todayOrder} />
          <Widget type="sales" value={totalAmount} todaySales={todaySales} />
          <Widget
            type="cash"
            value={totalCashPayment}
            totalOrder={totalOrders}
          />
          <Widget type="upi" value={totalUPIPayment} totalOrder={totalOrders} />
        </div>
        <div className="charts">
          <Chart title="Sales by date" aspect={2 / 1} data={chartData} />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
