import React, { useState } from "react";
import { InputWrapper, Input, BtnWrapper, Button, Form } from "./views";

let FileInputForm = (props) => {
  const [fileInput, setFileInput] = useState(null);

  const onChangeInputFile = (e) => {
    setFileInput(e.target.files[0]);
  };

  const handleSubmittingForm = async (e) => {
    e.preventDefault();
    if (fileInput) {
      await props.changePhoto(fileInput);
    }
    props.handleActivePhotoForm();
  };

  return (
    <Form onSubmit={handleSubmittingForm}>
      <InputWrapper>
        <Input type="file" onChange={onChangeInputFile} />
      </InputWrapper>
      <BtnWrapper>
        <Button type="submit">Add photo</Button>
      </BtnWrapper>
    </Form>
  );
};

export default FileInputForm;
