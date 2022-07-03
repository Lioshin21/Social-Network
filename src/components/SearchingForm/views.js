import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-basis: 100%;
`

export const Input = styled.input`
width: 100%;
margin: 10px;
padding: 10px;
border-radius: 20px;
font-size: 24px;
:focus {
    background-color: #0d2525;
    color: white;
    border: 2px solid blueviolet;
    outline: none;
}
`