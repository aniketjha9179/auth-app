import React from "react";

// arguement is same as  we pass text
const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg  ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}{" "}
    </button>
  );
};

export default Button;
