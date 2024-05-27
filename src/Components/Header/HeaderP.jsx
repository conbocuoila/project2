import React from "react";
import "./index.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge } from "antd";
const HeaderP = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_Tiki_2023.png"
          width={130}
          alt="logo"
        ></img>
      </div>
      <div className="header_search">
        <input type="text" placeholder="Search..."></input>
        <SearchOutlined className="iconsearch" />
      </div>
      <nav className="header_linres">
        <UserOutlined className="iconuser" />
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/regis"}>Register</Link>
        </li>
      </nav>
      <div className="header_shopping">
        <Badge  count={4} size="small">
          <ShoppingCartOutlined className="iconshopping" />
        </Badge>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default HeaderP;
