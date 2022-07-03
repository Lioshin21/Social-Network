// import { NavLink } from "react-router-dom";
import { Field } from "redux-form";
import styled from "styled-components";

export const Form = styled.form`
  padding: 50px;
  border-radius: 20px;
  box-shadow: 20px 38px 54px 30px rgb(0 0 0 / 64%);
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  width: 300px;
  height: 30px;
  border: 2px solid white;
  border-radius: 15px;
  padding: 5px 10px;
  border: 1px solid #0d2525;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: #0d2525;
  margin-bottom: 20px;
`;

export const CheckBox = styled(Field)`
  width: 20px;
  height: 20px;
  border: 2px solid #0d2525;
  padding: 2px;
  margin-right: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const Button = styled.button`
  height: 30px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 5px 10px;
  color: #0d2525;
  cursor: pointer;
  border: 2px solid #0d2525;
  transition: all 100ms ease-in-out;

  :hover {
    background: #0d2525;
    border-color: #0d2525;
    color: #e8e8e8;
  }
`;

// export const NavBtn = styled(NavLink)`
//   height: 30px;
//   border: 2px solid white;
//   border-radius: 10px;
//   padding: 5px 10px;
//   color: black;
//   cursor: pointer;
//   transition: all 100ms ease-in-out;

//   :hover {
//     background: #63d2d6;
//     border-color: #63d2d6;
// }
// `
