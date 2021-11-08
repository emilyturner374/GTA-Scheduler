import React from 'react';
import { Container, FormWrapper, TextBox, SignInBtn, Input } from './LoginElements';
import { ReactComponent as GtaLogo } from '../../icons/gta-logo.svg';

const Login = () => {
    return(
        <Container>
            <FormWrapper>
                <GtaLogo/>
                <TextBox> 
                    <Input defaultValue="M-number"/>
                </TextBox>
                <TextBox> 
                    <Input defaultValue="Password"/>
                </TextBox>
                <SignInBtn> Sign in </SignInBtn>
            </FormWrapper>
        </Container>
        
    )
}

export default Login;