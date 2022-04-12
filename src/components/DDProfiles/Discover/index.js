import React from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  ServicesContainer,
  TopLine,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,

} from './DiscoverElements';

import Video from '../../../video/discover.mp4';

import Icon1 from '../../../images/connect.svg';
import Icon2 from '../../../images/experience.svg';
import Icon3 from '../../../images/socialize.svg';



const Discover = () => {
  return (
    <>
    <HeroContainer >
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>

          {/* Resources section */}
        <ServicesContainer>
        <TopLine>RESOURCES</TopLine>
        <ServicesH1>DDeveloper Tools</ServicesH1>

            <ServicesWrapper>

                <ServicesCard>
                  <ServicesIcon src={Icon3} />
                  <ServicesH2>GITHUB</ServicesH2>
                  <ServicesP>
                    Both professional and fun: socialize with other gamers and developers.
                  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>EXPERIENCE</ServicesH2>
                  <ServicesP>
                    Experience what new gaming technologies can do for gamers and developers.
                  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2>CONNECT</ServicesH2>
                  <ServicesP>
                    An unlimited networking experience: Connect with developers globally.
                  </ServicesP>
                </ServicesCard>
              
          
            </ServicesWrapper>

            

    </ServicesContainer>

    

        
    

        </HeroContent>

    </HeroContainer>
   
    </>
  );
};

export default Discover;
