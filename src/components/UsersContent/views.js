import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%; 
  font-size: 24px;
  color: white;
  margin: 10px;

  position: relative;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const UsersWrapper = styled.div`
  height: 90vh;

  overflow-y: scroll;
  scroll-behavior: smooth;

  flex-direction: column;
  display: flex;

  ::-webkit-scrollbar {
    width: 2px;
  }
  
  ::-webkit-scrollbar {
    width: 10px; 
    border-radius: 9em;
    border: 1px solid #0d2525;
    background-color: #E8E2E0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0d2525;
    border-radius: 9em;
  }

`
export const TopContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
`

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: content;

  cursor: pointer;

  transform: translateY(-10%);
  transition: 0.4s;

  :hover {
    img {
    transform: translateY(-10%);
    transition: 0.4s;
    }
  }
`

export const ArrowUP = styled.img`
  margin: 2px 0px;
`
