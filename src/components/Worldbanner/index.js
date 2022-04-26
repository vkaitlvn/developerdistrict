import React from 'react';

import {
     
    TopLine, 
    Subtitle

} from './WBElements'

import pic from "../../images/ws.png";



const InfoSection = ({
    alt,
}) => {
    return (

        // this section will eventually be completely replaced by adding in the actual worldsim game here
    
        <div style={{ background: '#000000'}} className="text-white row py-5" id='about'>
            <div className="col-12 px-0">
                <div className="container-lg">
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <TopLine>WorldSim</TopLine>
                            <Subtitle>
                                coming soon...

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
