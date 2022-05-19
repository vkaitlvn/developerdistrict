import React from 'react';

import {
     
    TopLine, 
    Heading, 
    Subtitle

} from './InfoElements'

import pic from "../../images/controller2ppl.svg";




const InfoSection = ({
    alt,
}) => {
    return (
    
        <div style={{ background: '#000000'}} className="text-white row py-5" id='about'>
            <div className="col-12 px-0">
                <div className="container-lg">
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <TopLine>WELCOME</TopLine>
                            <Heading >DD'S MISSION</Heading>
                            <Subtitle>
                                Welcome to DeveloperDistrict, your center for all things gaming. DeveloperDistrict aims to provide game developers and enthusiasts a one stop destination for all things necessary for the ultimate gaming experience.

                            </Subtitle>

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={pic} 
                            alt={alt} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default InfoSection;
