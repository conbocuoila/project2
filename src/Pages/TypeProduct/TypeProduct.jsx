import React from "react";
import Navb from "../../Components/Navbar/Navb";
import CartC from "../../Components/CartComponent/CartC";
import { Col, Pagination, Row } from "antd";
import Carousel from "../../Components/Carousel/CarouselP";
import { WrapperCart } from ".";

const TypeProduct = () => {
  const onChange = () => {};
  return (
    <div>
      <Row
        style={{ padding: "0 30px", flexWrap: "nowrap", paddingTop: "10px" }}
      >
        <Col
          span={4}
          style={{
            backgroundColor: "#fff",
            padding: "0 6px",
            marginRight: "10px",
          }}
        >
          <Navb />
        </Col>
        <Col span={20}>
          <Carousel />
          <WrapperCart>
            <CartC />
            <CartC />
            <CartC />
            <CartC />
            <CartC />
            <CartC />
            <CartC />
            <CartC />
          </WrapperCart>
        </Col>
      </Row>
      <Pagination style={{padding: '40px 300px'}}
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={onChange}
      />
    </div>
  );
};

export default TypeProduct;
