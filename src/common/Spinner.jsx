import React from "react";
import ReactLoading from "react-loading";

const spinnerStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Spinner() {
  return (
    <div style={spinnerStyle}>
      <ReactLoading type="cylon" color="#c70039" height={120} width={120} />
    </div>
  );
}

export default Spinner;
