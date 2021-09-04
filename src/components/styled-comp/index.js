import React from "react";
import { Button } from "./button/Button.styles";
import HeaderText from "./header/HeaderText";
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  return (
    <Wrapper>
      <HeaderText>Clarusway </HeaderText>
      <HeaderText headerColor="red"> Header with props </HeaderText>
      <Button onClick={() => console.log(`clicked`)}>Default</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
