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
  Heading2,
  Heading3,
  
} from './MypageElements';


import pic from "../../../images/profilepic.svg";

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
                            <Heading3 > Location </Heading3>

                            <TopLine> About me </TopLine>
                            <Subtitle>
                                                      
                                This is an example profile that will appear on DeveloperDistrict's website allowing developers to share their portfolios and network.

                                

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


