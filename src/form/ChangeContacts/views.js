import { Field } from "redux-form";
import styled from "styled-components";

export const Form = styled.form`
  padding: 15px;
  border-radius: 20px;
  border-radius: 15px;
  border: 1px solid #0d2525;
  background: rgba(0, 0, 0, 0.2);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px;
  @media (max-width: 945px) {
    justify-content: center;
  }
`;

export const Input = styled(Field)`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #0d2525;
  padding: 0px 10px;
  outline-style: none;
  margin: 5px;
  @media (max-width: 1099px) {
    width: 250px;
  }
  @media (max-width: 945px) {
    position: relative;
    width: 100%;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  font-size: 12px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 5px;
  color: #0d2525;
  cursor: pointer;
  border: 1px solid #0d2525;
  transition: all 100ms ease-in-out;

  :hover {
    background: #0d2525;
    border-color: #0d2525;
    color: #e8e8e8;
  }
`;
