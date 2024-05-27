import React from "react";
import { WrapperBox, WrapperLeft, WrapperRight } from "./index";
import { Button, Col, Input, Row } from "antd";
import img from "../../assets/img/25b2ccba8f33a5157f161b6a50f64a60.png";
const SingInPage = () => {
  return (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ccc",
      }}
    >
      <WrapperBox>
        <WrapperLeft>
          <p>
            <strong>Đăng nhập bằng email</strong>
          </p>
          <p style={{ marginTop: "-12px" }}>
            Nhập email và mật khẩu tào khoản Tiki
          </p>
          <Input
            style={{ fontSize: "23px" }}
            type="text"
            placeholder="abc@gmail.com"
          />
          
          <Input
            style={{ fontSize: "23px" }}
            type="text"
            placeholder="password"
          />
            
            

          <Button
            style={{ width: "100%", fontSize: "25px", height: "51px" }}
            type="primary"
            danger
          >
            Đăng nhập
          </Button>
          <p
            style={{
              display: "flex",
              justifyContent: "start",
              color: "rgb(13, 92, 182)",
            }}
          >
            Quên mật khẩu
          </p>
          <p>
            Chưa có tài khoản ?{" "}
            <span
              style={{
                justifyContent: "start",
                color: "rgb(13, 92, 182)",
              }}
            >
              Tạo tài khoản
            </span>
          </p>
        </WrapperLeft>

        <WrapperRight>
          <img src={img} alt="img" width={250}></img>
          <p style={{ marginLeft: "62px" }}>Mua sắm tại tiki</p>
          <p style={{ marginLeft: "42px", marginTop: "-14px" }}>
            Siêu ưu đãi mỗi ngày
          </p>
        </WrapperRight>
      </WrapperBox>
    </div>
  );
};

export default SingInPage;
