import React from "react";
import { Nav, LinkWrapper, LinkElem } from "./views";
export const Navbar = (props) => (
  <Nav>
    <LinkWrapper>
      <LinkElem
        onClick={() =>
          props.userAuthId ? props.setUserIdAC(props.userAuthId) : null
        }
        to={props.isAuth ? `/profile/${props.userAuthId}` : `/login`}
      >
        Profile
      </LinkElem>
    </LinkWrapper>
    <LinkWrapper>
      <LinkElem to="/users">Users</LinkElem>
    </LinkWrapper>
    <LinkWrapper>
      <LinkElem to={props.isAuth ? `/friends` : `/login`}>Friends</LinkElem>
    </LinkWrapper>
  </Nav>
);
