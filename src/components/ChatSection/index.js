import React from 'react';

import {
     
    TopLine, 
    Heading, 
    Subtitle, 

} from './ChatElements'
// import css file

import pic from "../../images/chat.svg";

import { Button } from '../ButtonElements';
// import button from button elements where i create css designs for the buttons used on the website, each button in the sections utilize this css design



const InfoSection = ({
    alt,
}) => {
    return (
    
        <div style={{ background: '#000000'}} className="text-white row py-5" id='chat'>
            <div className="col-12 px-0">
                <div className="container-lg">
                    <div className="row px-4 justify-content-center align-items-center">
                        
                        <div className="col-lg-6 mb-4 mb-md-0">

                            <TopLine>Socialize</TopLine>
                            <Heading >DD CHAT</Heading>
                            <Subtitle>
                                Socialize with other gamers and developers. DD excels in creating an atmosphere that can be both professional and fun. <br/> Chat, share ideas, and brainstorm with others in DDChat: a safe and enjoyable chat board experience.
                                
                                <Button Link to ={{ pathname: "https://ddchat.netlify.app"}} target="_blank" aria-label="DDChat">
                                    DDChat
                                </Button>

                            </Subtitle>
                            

                        </div>
                        

                        <div className="col-lg-6 d-flex flex-column px-0 ps-lg-5 mt-5 mt-lg-0">
                            <img 
                            src={pic} 
                            alt={"individuals posting chat messages"} 
                            className="h-100 w-100" style={{objectFit:"cover"}}/>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
            
        
    );
};

export default InfoSection;
