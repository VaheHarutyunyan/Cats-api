import React from "react";
import "./style.scss";

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoaderComponent;
