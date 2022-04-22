import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

// import { 
//     FaTwitter,
    
// } from 'react-icons/fa';

import {
    BiWorld
} from 'react-icons/bi';

import {
    BsChatDots
} from 'react-icons/bs';

import {
    CgProfile
} from 'react-icons/cg';





import {
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    
} from './FooterElements';

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
                        
                        <WebsiteRights>
                            DeveloperDistrict © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>



                        <SocialIcons>
                            {/* <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink> */}

                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="World">
                                <BiWorld />
                            </SocialIconLink>

                            <SocialIconLink to="/DDchat" href="https://warm-halva-96c8f7.netlify.app/" target="_blank" aria-label="Chat">
                                <BsChatDots />
                            </SocialIconLink>

                            <SocialIconLink to="/DDchat" target="_blank" aria-label="Chat">
                                <    CgProfile />
                            </SocialIconLink>

                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </div>
    )
}

export default Footer
