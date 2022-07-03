import React from "react";
import { Input, Wrapper } from "./views";

const SearchingForm = (props) => {
  return (
    <Wrapper>
      <Input
        type="text"
        value={props.searchingName}
        placeholder="Enter username"
        onChange={(event) => {
          if (!props.isFetching) {
            props.cleaningState();
            props.getItems(1, 10, event.target.value);
          }
        }}
      ></Input>
    </Wrapper>
  );
};

export default SearchingForm;
