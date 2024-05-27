import React from "react";
import HeaderP from "../Header/HeaderP";
const DefaultPage = ({ children }) => {
  return (
    <div>
      <HeaderP />
      {children}
    </div>
  );
};

export default DefaultPage;
