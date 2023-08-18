import React from "react";

const BiggerContainer = ({ children }) => {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center p-2 m-2">
      {children}
    </div>
  );
};

export default BiggerContainer;
