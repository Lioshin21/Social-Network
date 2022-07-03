import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  border: 2px solid #0d2525;
  border-radius: 20px;
  background-position: 100% 0;

  display: flex;
  justify-content: space-between;
  align-content: center;

  padding: 0 10px;
  margin: 10px;

  transition: all 0.2s ease-in;

  :hover {
    * {
      color: #e8e2e0;
    }

    background: #0d2525;
    box-shadow: 0px 21px 25px -4px rgb(0 0 0 / 64%);
    background-position: 0 0;
    button {
      background: #e8e2e0;
      box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
      background-position: 0 0;
      color: #0d2525;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2px;

  cursor: pointer;
`;

export const LinkElem = styled(NavLink)`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #0d2525;
`;

export const ProfileImg = styled.img`
  cursor: pointer;

  width: 70px;
  height: 70px;
  margin: 5px;

  border-radius: 50%;
  border: 1px solid white;
`;

export const FollowBtn = styled.button`
  align-self: center;
  text-decoration: none;
  display: inline-block;

  padding: 12px 40px;
  margin: 10px 20px;

  border-radius: 30px;

  background: #0d2525;
  background-position: 100% 0;
  box-shadow: 0px 21px 25px -4px rgb(0 0 0 / 64%);

  font-size: 18px;
  font-weight: 600;
  color: white;

  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
