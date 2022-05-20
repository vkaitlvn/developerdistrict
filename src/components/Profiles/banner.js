// profiles info section featured on the home page

import React from 'react';

import {
     
    TopLine, 
    Heading, 
    Subtitle

} from './ProfilesElements'

import pic from "../../images/profiles.svg";
import { Button } from '../ButtonElements';



const InfoSection = ({
    alt,
}) => {
    return (
    
        <div style={{ background: '#000000'}} className="text-white row py-5 mt-5" id='profiles'>
            <div className="col-12 px-0">
                <div className="container-lg">
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        
                        
                        <div className="col-lg-6 mb-4 mt-5 mb-md-0">

                            <TopLine>Connect</TopLine>
                            <Heading >DD Profiles</Heading>
                            <Subtitle>
                                Create a profile and connect with other developers with DDProfiles. <br/> Accessible to professionals looking to collaborate and creat or for students looking to intern and learn.

                                <Button to="/profiles">
                                DDPROFILES
                                </Button>

                            </Subtitle>
                            

                        </div>
                        
                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={pic} 
                            alt={"user looking through profiles"} 
                            // alt tag for accessibility
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default InfoSection;
