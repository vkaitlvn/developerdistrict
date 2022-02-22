import React, {useState} from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChatSection from '../components/ChatSection';
import Footer from '../components/Footer';


const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ChatSection />

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
