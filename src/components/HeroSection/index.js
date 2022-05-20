// main landing homepage banner on developerdistrict

import React, { useState } from 'react';

import Video from '../../video/hero.mp4';
// video game background from a royalty free site

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1
  
} from './HeroElements';
// css code used and imported

function HeroSection() {
  const [hover, setHover] = useState(false);

  

  return (
    <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        {/* autoplays video background on a loop */}

        <HeroContent>
          <HeroH1>DEVELOPER DISTRICT</HeroH1>

          <HeroP>
            Your center for all things gaming...
          </HeroP>

          

        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
