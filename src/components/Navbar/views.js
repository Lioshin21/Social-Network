import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  max-width: 200px;
  min-width: 200px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #0d2525;
  border-radius: 30px;
  margin: 10px;
  padding-top: 80px;
`;

export const LinkWrapper = styled.div`
  font-size: 24px;
  height: 20px;
  margin: 5px;
  padding: 5px;

  transition: all 0.1s ease;

  :hover {
    transform: scale(1.2);
  }
`;

export const LinkElem = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: all 0.1s ease-in;

  &.active {
    color: gold;
  }
`;
