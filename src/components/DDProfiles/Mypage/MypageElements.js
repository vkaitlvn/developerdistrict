// css file for ddprofiles

import styled from 'styled-components';




export const HeroContainer = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
//   position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  // flex-direction: column;
  align-items: center;
`;






export const TopLine = styled.div`
  color: #01bf71;
  font-size: 2rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Heading2 = styled.h1`
  margin-bottom: 20px;
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: #8b4fc8;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Heading3 = styled.h1`
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.1;
  font-weight: 600;
  color: #8b4fc8;
  font-style: italic;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 90px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;


