import { Button, Input } from "antd";
import React from "react";
import { WrapperBox, WrapperLeft, WrapperRight } from "./index";
import img from "../../assets/img/25b2ccba8f33a5157f161b6a50f64a60.png";
const SignUpPage = () => {
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
            <strong>Xin chào,</strong>
          </p>
          <p style={{ marginTop: "-12px" }}>Tạo tài khoản Tiki</p>
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
          <Input
            style={{ fontSize: "23px" }}
            type="text"
            placeholder="Confirm password"
          />

          <Button
            style={{ width: "100%", fontSize: "25px", height: "51px" }}
            type="primary"
            danger
          >
            Đăng ký
          </Button>

          <p>
            Bạn đã có tài khoản ?{" "}
            <span
              style={{
                justifyContent: "start",
                color: "rgb(13, 92, 182)",
              }}
            >
              Đăng nhập
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

export default SignUpPage;
