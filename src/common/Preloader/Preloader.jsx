import React from "react";
import { PreloaderItem, PreloaderRow, Wrapper } from "./views";

export default function Preloader() {
  return (
    <Wrapper>
      <PreloaderRow>
        <PreloaderItem></PreloaderItem>
        <PreloaderItem></PreloaderItem>
      </PreloaderRow>
    </Wrapper>
  );
}
