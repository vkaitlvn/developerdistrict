import React, {useState} from 'react';
import Footer from '../components/Footer';

import Navbar2 from '../components/DDProfiles/ProfilesNavbar'
// new navbar for profiles only

import Sidebar2 from '../components/Sidebar2';
import Mypage from '../components/DDProfiles/Mypage';
import Discover from '../components/DDProfiles/Discover';





const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Sidebar2 isOpen={isOpen} toggle={toggle} />
            <Navbar2 toggle={toggle} />
            <Mypage/>
            <Discover/>
            
            
            
            

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
