import React from "react";
import { Wrapper, Container, OwnersWrapper, Text, TextBeforeOwnersName} from "./views";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Text>DescktopApp</Text>
        <OwnersWrapper>
            <TextBeforeOwnersName>create by</TextBeforeOwnersName>
            <div>
                <Text>Nikson666</Text>
                <Text>Lioshin1</Text>
            </div>
        </OwnersWrapper>
      </Container>
    </Wrapper>
  );
};
