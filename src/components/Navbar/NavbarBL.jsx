import React from "react";
import { connect } from "react-redux";
import { setUserIdAC } from "../../redux/reducers/profileReducer";
import { Navbar } from "./Navbar";

const NavbarBL = (props) => {
  return (
    <Navbar
      setUserIdAC={props.setUserIdAC}
      getProfile={props.getProfile}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  userAuthId: state.auth.id,
  isAuth: state.auth.isAuth,
  userId: state.profilePage.id,
});

export default connect(mapStateToProps, { setUserIdAC })(NavbarBL);
