import React from "react";

import { StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
const CartC = () => {
  return (
    <div className="item">
      <Card
      
        hoverable
        style={{ width: 180, height: 300}}
        cover={
          <img
          style={{width: 100, height: 100, marginLeft: '40px'}}
            alt="img"
            src="https://s.meta.com.vn/Data/image/2016/10/06/noi-com-dien-hamilton-beach-37541-in.jpg"
          />
        }
      >
        <Meta
           style={{fontSize: 12}}
          title="Nồi cơm điện"
          description="Nồi áp suất Elmich PCE-1805 dung tích 2.5L - Hàng Chính Hãng"
        />
        <span>
          4.98{" "}
          <StarFilled
            style={{ fontSize: "10", color: "yellow", marginTop: 20 }}
          />
        </span>
        <span>| Đã bán 1000+</span>
        <p style={{ color: "orange" }}>
          1.000.000đ <span>-5%</span>
        </p>
      </Card>
     
      
    </div>
  );
};

export default CartC;
