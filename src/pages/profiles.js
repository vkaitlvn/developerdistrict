import React, {useState} from 'react';
import Footer from '../components/Footer';

import Navbar2 from '../components/ProfilesNavbar'
// new navbar for profiles only

import Sidebar from '../components/Sidebar';
import ChatSection from '../components/ChatSection'
import World from '../components/World'
import MYpage from '../components/MYpage'




const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar2 toggle={toggle} />
            <MYpage/>
            
            
            
            

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
