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
  
} from './landingElements';

import pic from "../../../images/profiles.svg";
import { Button } from '../../ButtonElements';

function HeroSection() {

  

  return (
    <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>

            <div className="col-lg-6 mb-4 mt-5 mb-md-0">

                            <TopLine>WELCOME TO</TopLine>
                            <Heading >DD Profiles</Heading>
                            <Subtitle>
                                Where developers can connect and socialize. Create your profile and discover other developers in a safe and professional way.
                                <br/> 

                                <Button to="/profiles">
                                Get Started
                                </Button> 

                            </Subtitle>
                            

                        </div>
                        
                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={pic} 
                            // alt={alt} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>
                        

    

        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;


