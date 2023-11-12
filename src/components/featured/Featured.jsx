import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
import OrderService from "../../database/OrderService";

const Featured = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = OrderService.getAllOrders().then((orders) => {
      const fmtOrders = orders.docs.map((row) => ({
        ...row.data(),
        id: row.id,
        totalAmount: row.data().cartTotal,
        createdAt: row.data().createdAt.toDate().toLocaleDateString("en-us"),
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
  const thisMonthSales = (data) => {
    let thisMonthData = data || [];
    for (var i = 0; i < 1; i++)
      thisMonthData = thisMonthData.filter(
        (item) => new Date(item.createdAt).getMonth() === new Date().getMonth()
      );
    thisMonthData = thisMonthData
      .reduce((a, b) => a + Number(b.totalAmount), 0)
      .toFixed(2);
    return thisMonthData;
  };
  const lastMonthSales = (data) => {
    let lastMonthData = data || [];
    for (var i = 0; i < 1; i++)
      lastMonthData = lastMonthData.filter(
        (item) =>
          new Date(item.createdAt).getMonth() === new Date().getMonth() - 1
      );
    lastMonthData = lastMonthData.reduce(
      (a, b) => a + Number(b.totalAmount),
      0
    );
    return lastMonthData;
  };

  const todaySales = () => {
    let tdyData = data || [];
    tdyData = data.filter(
      (item) => new Date(item.createdAt).getDate() === new Date().getDate()
    );

    tdyData = tdyData.reduce((a, b) => a + Number(b.totalAmount), 0);
    console.log(tdyData);
    return tdyData;
  };
  const yesterdaySales = (data) => {
    let yesterdayData = data || [];
    yesterdayData = yesterdayData.filter(
      (item) =>
        new Date(item.createdAt).getDate() === Number(new Date().getDate()) - 1
    );
    yesterdayData = yesterdayData
      .reduce((a, b) => a + Number(b.totalAmount), 0)
      .toFixed(2);
    return yesterdayData;
  };
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={(todaySales(data) / yesterdaySales(data)) * 100}
            text={`${Math.round(
              (todaySales(data) / yesterdaySales(data)) * 100
            )} %`}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: `green`,
              textColor: "green",
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">₹ {todaySales(data)}</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Yesterday</div>
            {yesterdaySales(data) > todaySales(data) ? (
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                <div className="resultAmount"> ₹ {yesterdaySales(data)}</div>
              </div>
            ) : (
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount"> ₹ {yesterdaySales(data)}</div>
              </div>
            )}
          </div>
          <div className="item">
            <div className="itemTitle">This Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount"> ₹ {thisMonthSales(data)}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            {lastMonthSales(data) > thisMonthSales(data) ? (
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                <div className="resultAmount"> ₹ {lastMonthSales(data)}</div>
              </div>
            ) : (
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount"> ₹ {lastMonthSales(data)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
