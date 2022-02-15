import React from 'react';
import Icon1 from '../../images/connect.svg';
import Icon2 from '../../images/experience.svg';
import Icon3 from '../../images/socialize.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  TopLine
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <TopLine>SERVICES</TopLine>
      <ServicesH1>WHAT CAN DD DO FOR YOU?</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>CONNECT</ServicesH2>
          <ServicesP>
            An unlimited networking experience: Connect with developers globally.
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
          <ServicesIcon src={Icon3} />
          <ServicesH2>SOCIALIZE</ServicesH2>
          <ServicesP>
            Both professional and fun: socialize with other gamers and developers.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
