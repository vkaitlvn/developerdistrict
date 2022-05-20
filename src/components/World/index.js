import React from 'react';

import {
    
    TopLine, 
    Heading, 
    Subtitle, 
   
} from './WorldElements'
// importing css here

import pic from "../../images/world.svg";
// import image from images folder
import { Button } from '../ButtonElements';
// making a button using my css file


const InfoSection = ({ 
    alt,
    
}) => {
    return (
        <div id='world' style={{ background:'#000000'}} className="text-white row py-5 mt-5 mb-5" >
            <div className="col-12 px-0">
                <div className="container-lg">
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        
                        <div className="col-lg-6 mb-4 mt-5 mb-md-0">
                            <img src={pic} 
                            alt={"Players choosing a character"} 
                             // alt tags for accessibility

                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>



                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            
                            <TopLine>EXPERIENCE</TopLine>
                            <Heading> WORLDSIM</Heading>
                            <Subtitle> Meet, chat, and play with others virtually in Worldsim: the metaverse for gamers. 

                            <Button to="/worldsim">WORLDSIM</Button>

                            </Subtitle>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
