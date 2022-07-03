import React from "react";
import { reduxForm } from "redux-form";
import { InputWrapper, Input, BtnWrapper, Button, Form } from "./views";

let ChangeContactsForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        {Object.keys(props.profile.contacts).map((objKey, index) => (
          <Input
            type="text"
            name={objKey}
            key={index}
            placeholder={objKey}
            component="input"
          />
        ))}
        <Input
          name="aboutMe"
          component="input"
          type="text"
          placeholder="aboutMe"
        />
      </InputWrapper>
      <BtnWrapper>
        <Button disabled={submitting} type="submit">
          Change
        </Button>
      </BtnWrapper>
    </Form>
  );
};

ChangeContactsForm = reduxForm({
  form: "ChangeContactsForm",
})(ChangeContactsForm);

export default ChangeContactsForm;
