import React from 'react';

import Video from '../../../video/ddprofiles.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  TopLine,
  Heading,
  Subtitle,
  Heading2
  
} from './MypageElements';

import pic from "../../../images/profilepic.svg";
import { Button } from '../../ButtonElements';

function HeroSection() {

  

  return (
    <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>

            <div className="col-lg-6 mb-4 mt-5 mb-md-0">

                            <TopLine>MyPage</TopLine>
                            <Heading >NAME</Heading>
                            <Heading2 > Game Developer (Title)</Heading2>

                            <Subtitle>
                                About me
                                <br/> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

                                <Button  id='connect'>
                                Connect
                                </Button> 

                            </Subtitle>
                            

                        </div>
                        
                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={pic} 
                            // alt={alt} 
                            className="h-75 w-75" style={{objectFit:"cover"}}/>
                        

                        </div>
                        
                        

    

        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;


