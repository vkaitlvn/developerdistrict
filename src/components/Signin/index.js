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
  FormH2
} from './SigninElements';

import Video from '../../video/hero.mp4';
// import { Button } from '../ButtonElements2';




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
              {/* <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton> */}

              {/* <Text>Forgot password</Text> */}

              {/* <Button to="/Signup">Sign Up</Button> */}

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