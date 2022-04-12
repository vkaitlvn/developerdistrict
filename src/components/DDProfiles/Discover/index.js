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
import Icon3 from '../../../images/githubicon.svg';



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
                    A platform where developers can share and save their codes.
                  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>CONSTRUCT</ServicesH2>
                  <ServicesP>
                    A game developing website that offers free tutorials and free trials.
                  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2>UNITY</ServicesH2>
                  <ServicesP>
                    A game development platform with tutorials and free assets.
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
