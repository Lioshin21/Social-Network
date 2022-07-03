import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
// form
import LoginForm from "../../form/Login/LoginForm";
// components
import { login } from "../../redux/reducers/authReducer";
// views
import { Wrapper } from "./views";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);  };

  if (props.isAuth) {
    return <Navigate to={`/profile/${props.authId}`} />
  }

  return (
    <Wrapper>
      <LoginForm onSubmit={onSubmit} />
    </Wrapper>
  );

};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authId: state.auth.id,
});

export default connect(mapStateToProps, { login })(Login);
