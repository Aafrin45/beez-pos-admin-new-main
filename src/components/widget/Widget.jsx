import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MoneyOutlined from "@mui/icons-material/MoneyOutlined";
import PaymentOutlined from "@mui/icons-material/PaymentOutlined";

const CURRENCY_FORMAT_INR = "₹";

const Widget = ({ type, value, totalOrder, todaySales, todayOrder }) => {
  let data;

  // temporary
  // const diff = 20;

  switch (type) {
    case "cash":
      data = {
        title: "PAYMENT - CASH",
        isMoney: false,
        link: "See all cash",
        diff: Math.round((value / totalOrder) * 100),
        icon: 
        (
          <MoneyOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        diff: Math.round((todayOrder / value) * 100),
        icon: ( 
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "sales":
      data = {
        title: "SALES",
        isMoney: true,
        link: "View net sales",
        diff: Math.round((todaySales / value) * 100),
        // diff: todaySales,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "upi":
      data = {
        title: "PAYMENT - UPI",
        isMoney: false,
        link: "See details",
        diff: Math.round((value / totalOrder) * 100),
        icon: (
          <PaymentOutlined
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && `${CURRENCY_FORMAT_INR}`} {value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data.diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
