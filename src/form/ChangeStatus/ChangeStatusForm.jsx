import React from "react";
import { reduxForm } from "redux-form";
import { InputWrapper, Input, BtnWrapper, Button, Form } from "./views";

let ChangeStatusForm = (props) => {
  const { handleSubmit, submitting } = props;
  return props.displayStatusForm ? (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          name="status"
          component="input"
          type="text"
          placeholder="status"
        />
      </InputWrapper>
      <BtnWrapper>
        <Button disabled={submitting} type="submit">
          Change
        </Button>
      </BtnWrapper>
    </Form>
  ) : null;
};

ChangeStatusForm = reduxForm({
  form: "ChangeStatusForm",
})(ChangeStatusForm);

export default ChangeStatusForm;
