import React, {useState} from 'react';
import Footer from '../components/Footer';

import Navbar2 from '../components/DDProfiles/ProfilesNavbar'
// new navbar for profiles only

import Sidebar from '../components/Sidebar';

import MYpage from '../components/DDProfiles/profileslanding'




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
