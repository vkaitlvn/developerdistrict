import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  HeroBg,
  VideoBg,
  MiniCont,
  Spacer,
} from './SigninElements';

import Video from '../../video/hero.mp4';



import Login from '../GoogleLogin/Login';
import Logout from '../GoogleLogin/Logout';

// import { Navbar } from 'react-bootstrap';
// import Navbar from '../Navbar';


const SignIn = () => {
  return (
    <>
    <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    
      <Container>
      
        <FormWrap>
          <Icon to='/'>DD</Icon>
          {/* <Navbar/> */}
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to DD</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              {/* <Text>Forgot password</Text> */}
              <FormH1>Sign in using Google</FormH1>
            
              <MiniCont>
                <Login/>
                <Spacer> </Spacer>
                <Logout/>
              </MiniCont>
            </Form>
            
            
          </FormContent>
        </FormWrap>
      </Container>

    </>
  );
};

export default SignIn;
