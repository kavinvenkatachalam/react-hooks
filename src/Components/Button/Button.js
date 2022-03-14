import React from "react";

export default function Button({ children, onClick, style }) {
  const buttonStyle = {
    background: "#46b13d",
    border: "0px",
    padding: "10px 20px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 500,
    ...style,
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}
