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
} from './NewsElements';

import Video from '../../video/hero.mp4';



const News = () => {
  return (
    <>
    <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    
      <Container>
      
        
      </Container>

    </>
  );
};

export default News;
