import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
  border-top: 1px solid #0d2525;
  margin-top: 50px;
`;

export const Container = styled.div`
  position: relative;
  margin: 0 40px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const OwnersWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const TextBeforeOwnersName = styled(Text)`
  border-right: 1px solid;
`;
