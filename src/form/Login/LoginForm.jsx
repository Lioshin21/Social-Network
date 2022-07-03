import React from "react";
//redux-form
import { reduxForm } from "redux-form";
// views
import {
  Input,
  CheckBox,
  CheckBoxWrapper,
  InputWrapper,
  BtnWrapper,
  Button,
  Form
} from "./views";

let LoginForm = (props) => {
  const { handleSubmit, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          name="email"
          component="input"
          type="email"
          placeholder="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="password"
          component="input"
          type="password"
          placeholder="password"
        />
      </InputWrapper>
      <CheckBoxWrapper>
        <CheckBox name="remember_me" component="input" type="checkbox" />
        rememberMe
      </CheckBoxWrapper>
      <BtnWrapper>
        <Button
         
          type="submit"
          disabled={submitting}
        >
          Login
        </Button>
        <Button onClick={reset}>clear from</Button>
      </BtnWrapper>
    </Form>
  );
};

LoginForm = reduxForm({
  form: "LoginForm",
})(LoginForm);

export default LoginForm;
