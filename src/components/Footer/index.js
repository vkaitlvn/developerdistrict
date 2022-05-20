// Footer code used for entire website

import React from 'react'
import { animateScroll as scroll } from 'react-scroll';


import {
    BiWorld
} from 'react-icons/bi';

import {
    BsChatDots
} from 'react-icons/bs';

import {
    CgProfile
} from 'react-icons/cg';
// different icons imported for bottom right corner of navbar



import {
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons
        
} from './FooterElements';
import { Button } from '../ButtonElements4';

const toggleHome = () => {
    scroll.scrollToTop()
  }

const Footer = () => {
    return (
        <div className="row " style={{background: "#000000"}}>
            <FooterWrap>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            DeveloperDistrict
                        </SocialLogo>
                        {/* clickable logo, returns home */}
                        
                        <WebsiteRights>
                            DeveloperDistrict © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        {/* copyright message */}



                        <SocialIcons>
                          

                            <Button to="/worldsim" target="_blank" aria-label="World">
                                <BiWorld />
                            </Button>

                    
                            <Button Link to ={{ pathname: "https://ddchat.netlify.app"}} target="_blank" aria-label="DDChat">
                                <BsChatDots/>
                            </Button>

                            <Button to="/profiles" target="_blank" aria-label="Chat">
                                <    CgProfile />
                            </Button>

                        </SocialIcons>
                        {/* icon links */}
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </div>
    )
}

export default Footer
