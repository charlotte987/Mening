import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { devices } from "./devices";
import { Card, Row } from "antd";

export const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  padding: 5% 10%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    margin-right: 20px;
  }

  @media ${devices.mobile} {
    margin-bottom: 20px;
  }
`;

export const DivTitle = styled.h1`
  color: #000000;
  padding-top: 3%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 30vh;
`;

export const Title = styled.h1`
  color: #000000;
  padding-top: 3%;
`;

export const Subtitle = styled.p`
  color: #222222;
  padding-top: 3%;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  max-width: 500px;
`;

export const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export const Btn = styled.nav`
  display: flex;
  align-items: center;
`;

export const BtnLink = styled(Link)`
  border-radius: 4px;
  background: #8247e5;
  padding: 10px 22px;
  margin-top: 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e7d9ff;
    color: #010606;
  }
`;

export const featureDiv = styled.div``;

// Ant-Design

export const Feature = styled(Card)`
  box-shadow: 0.5px 0.5px 1px 1px #8247e5;
  border-radius: 10px;
  border-color: #8247e5;
`;

export const Line = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
