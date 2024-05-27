import { Image } from "antd";
import styled from "styled-components";

export const WrapperImg = styled(Image)`
  height: 64px;
  width: 64px;
  padding: 0 1px;
`;
export const WrapperText = styled.h1`
  margin-left: 20px;
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300px;
  line-height: 32px;
  word-break: break-word;
`;
export const WraperPrice = styled.h1`
  margin-left: 20px;
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
`;
export const WrapperAddress = styled.div`
  margin-left: 20px;
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsisl;
  }
  ,
  span.changeaddress {
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const WraperQuantity = styled.div`
     display: flex;
     gap: 12px;
`
