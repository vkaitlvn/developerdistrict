import React, {useState} from 'react';
import {ChatEngine} from 'react-chat-engine';
import './DDchat.css';


import Footer from '../components/Footer';


const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    

    return (
        <div className="container-fluid">



            <ChatEngine 

            height="100vh"
            // makes chat full heigh of page
            projectID="207ead68-55ff-49dc-83eb-e67f7fa95dbc"
            //string u get once u make chat app
            userName="DDdeveloper"
            userSecret="000001"
            //password

        />




            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
