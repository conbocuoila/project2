import React from "react";
import { WrappeP, WrapperText } from "./index";
import { Checkbox, Col, Rate, Row } from "antd";

const Navb = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((item) => {
          return <WrapperText>{item}</WrapperText>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            onChange={onChange}
          >
            {options.map((items) => {
              return <Checkbox value={items.value}>{items.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((items) => {
          return (
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Rate style={{ display: "flex" }} disabled defaultValue={items} />
              <WrapperText>{`Từ ${items} sao`}</WrapperText>
            </div>
          );
        });
      case "price":
        return options.map((items) => {
          return <WrapperText>{items}</WrapperText>;
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrappeP>Navbar</WrappeP>
      <div>
        {renderContent("text", ["TV", "Tủ lạnh", "Máy giặt", "Máy lạnh"])}
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "c", label: "C" },
        ])}

        {renderContent("star", [1, 2, 3, 4, 5])}
        {renderContent("price", [
          "dưới 40.000",
          "dưới 100.000",
          "dưới 1.000.000",
          "trên 1.000.000",
          "trên 2.000.000",
        ])}
      </div>
    </div>
  );
};

export default Navb;
