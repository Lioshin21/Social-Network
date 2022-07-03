import styled from "styled-components";

export const Wrapper = styled.div`
/* position: fixed; */
  left: 50%;
  top: 50%;
  right: 50%;
  bottom: 0;
  z-index: 1001;
`

export const PreloaderRow = styled.div`
position: relative;
  top: 45vh;
  left: 45vw;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: -35px;
  text-align: center;
  animation: preloader-rotate 2s infinite linear;
`

export const PreloaderItem = styled.div`
/* position: absolute; */
  display: inline-block;
  top: 0;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  border-radius: 100%;
  width: 35px;
  height: 35px;
  animation: preloader-bounce 2s infinite ease-in-out;
    :last-child {
        top: auto;
  bottom: 0;
  animation-delay: -1s;
    }
    @keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes preloader-bounce {

  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

`
