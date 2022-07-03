import React from "react";
// views
import { ListElem, Value } from "./views";

export const ContactsElem = (props) => {
  return (
    <ListElem>
      {`${props.objKey}: `}
      <Value
        onClick={() => (props.value ? window.open(props.value) : null)}
        href={"#"}
      >
        {props.value ? props.value : "not filled"}
      </Value>
    </ListElem>
  );
};
