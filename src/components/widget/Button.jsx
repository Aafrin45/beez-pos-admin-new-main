import React from "react";
import { useStateContext } from "../../context/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  onClick,
  fontSize
}) => {
  const { setIsClicked } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(onClick)}
    // onClick={(e)=>onClick(e)}
      style={{ backgroundColor: bgColor, color, borderRadius,fontSize }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
