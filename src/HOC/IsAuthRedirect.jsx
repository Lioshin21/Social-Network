import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const IsAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      return !this.props.isAuth ? (
        <Navigate to={"/login"} />
      ) : (
        <Component {...this.props} />
      );
    }
  }
  return connect(mapStateToProps)(RedirectComponent);
};
