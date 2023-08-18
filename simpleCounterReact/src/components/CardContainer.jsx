import React from "react";

const CardContainer = ({ children }) => {
  return (
    <div className="card col m-2 text-center text-white p-1 bg-dark border border-secondary fs-1">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardContainer;
