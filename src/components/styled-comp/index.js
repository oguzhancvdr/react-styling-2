import React from "react";
import { Button } from './button/Button.styles'
import Wrapper from "./wrapper/Wrapper";

const StyledComponents = () => {
  return (
    <Wrapper >
     <Button onClick={() => console.log(`clicked`)}>Default</Button>
     <Button primary>Primary</Button>
    </Wrapper>
  );
};

export default StyledComponents;
