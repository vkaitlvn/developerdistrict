import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { 
    FaDiscord, 
    FaTwitter,
    FaTshirt
} from 'react-icons/fa';

import { 
    GiSailboat,
    GiScrollQuill
} from 'react-icons/gi';




import {
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
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
                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        

                    </FooterLinksWrapper>


                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            DeveloperDistrict
                        </SocialLogo>
                        <WebsiteRights>
                            DeveloperDistrict © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>



                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>



                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </div>
    )
}

export default Footer
