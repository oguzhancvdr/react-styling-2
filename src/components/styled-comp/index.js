import React from 'react'
import Button from './button/Button';
import HeaderText from './header/HeaderText';
import LearnFSD from './link/LearnFSD';
import Wrapper from './wrapper/Wrapper';

const StyledComponents = () => {
    return (
        <Wrapper bgColor="wheat">
            <HeaderText>Clarusway</HeaderText>
            <HeaderText headerColor="purple">Styled Components</HeaderText>

            <LearnFSD secondary href="https://clarusway.com/" target="_blank" >Learn Full Stack Development</LearnFSD>
            <Button primary>Primary</Button>
            <Button>Default</Button>
        </Wrapper>
    )
}

export default StyledComponents
