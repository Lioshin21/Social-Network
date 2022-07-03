import React from "react";
import { connect } from "react-redux";
import { getAuthDate, logout } from "../../redux/reducers/authReducer";
import { Wrapper, Login, Logo, Container } from "./views";

const Header = (props) => {
  React.useEffect(() => {
    props.getAuthDate();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Logo to="/#">Logo</Logo>
        <Login
          onClick={() => (props.isAuth ? props.logout() : null)}
          to={"/login"}
        >
          {props.isAuth ? "logout" : "login"}
        </Login>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authId: state.auth.id,
});

export default connect(mapStateToProps, { getAuthDate, logout })(Header);
