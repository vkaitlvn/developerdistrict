import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  HeroBg,
  VideoBg,
  MiniCont,
  Spacer,
  FormH2
} from './SigninElements';

import Video from '../../video/hero.mp4';




import Login from '../GoogleLogin/Login';
import Logout from '../GoogleLogin/Logout';




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
              

            

              <FormH2>Google Log In</FormH2>

            
              <MiniCont>
                <Login/>
                <Spacer> </Spacer>
                <Logout/>
                <Spacer> </Spacer>

              </MiniCont>
            </Form>
            
            
          </FormContent>
        </FormWrap>
      </Container>

    </>
  );
};

export default SignIn;
