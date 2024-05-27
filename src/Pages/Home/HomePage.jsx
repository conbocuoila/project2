import React from "react";
import TProduct from "../../Components/TypeProduct/TProduct";
import "./index.scss";
import Carousel from "../../Components/Carousel/CarouselP";
import CartC from "../../Components/CartComponent/CartC";
import Navb from "../../Components/Navbar/Navb";
import { Button } from "antd";
import { WrapperButton } from ".";
const HomePage = () => {
  const arr = [
    "TV",
    "Tủ lạnh",
    "Laptop",
    "Máy giặc",
    "Bàn là",
    "Máy vi tính",
    "Máy hút bụi",
    "Máy nghe nhạc",
  ];
  return (
    <div>
      <div className="listProduct">
        {arr.map((item) => {
          return <TProduct name={item} key={item} />;
        })}
      </div>
     <div style={{padding: '0 120px', alignItems: 'center'}}>
     <Carousel />
      <div style={{ marginLeft: '20px',marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap'}}>
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
        <CartC />
      </div>
     </div>
      <WrapperButton>Xem thêm</WrapperButton>
      <Navb />
    </div>
  );
};

export default HomePage;
