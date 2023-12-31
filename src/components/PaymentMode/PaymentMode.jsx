
import React from "react";
import "./paymentmode.scss";
import cash from "../../assets/cash.png";
import upi from "../../assets/upi.png";

const PaymentMode = ({ type }) => {
  let content = null;


switch (type.toLowerCase()) {
  case "cash":
    content = <img className="payment-icon" src={cash} alt="Cash Icon" />;
    break;
  case "upi":
    content = <img className="payment-icon" src={upi} alt="UPI Icon" />;
    break;
  default:
    content = <span className="payment-text">Hold</span>;
    break;
}

  return <div>{content}</div>;
};

export default PaymentMode;

