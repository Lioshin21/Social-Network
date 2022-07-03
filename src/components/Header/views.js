import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  position: relative;
  background: #0d2525;
  border-radius: 20px;
  margin: 5px 10px;
  box-shadow: 0px 21px 25px -4px rgb(0 0 0 / 64%);
`;

export const Container = styled.div`
  position: relative;
  margin: 0 40px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  font-size: large;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  transition: all 10ms ease;
  text-decoration: none;
  color: white;
  transition: all 100ms ease-in;

  &:hover {
    transform: scale(1.2);
    padding-bottom: 8px;
  }
`;

export const Login = styled(NavLink)`
  font-size: large;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  transition: all 10ms ease;
  text-decoration: none;
  color: white;
  transition: all 100ms ease-in;

  &:hover {
    transform: scale(1.2);
    padding-bottom: 8px;
  }
`;
