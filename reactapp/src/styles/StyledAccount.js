import styled from "styled-components";
import { Card } from "antd";

export const Body = styled.body`
  background-color: #f6f6f6;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40vh;
  padding-bottom: 40vh;
`;

export const Profile = styled(Card)`
  box-shadow: 0.8px 0.8px 0.8px 0.8px #cccccc;
  border-color: #f6f6f6;
  border-radius: 5px;
  width: 300px;
`;
