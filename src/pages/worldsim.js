import React, {useState} from 'react';
import Footer from '../components/Footer';

import Navbar3 from '../components/WorldSim/Navbar3'
// new navbar for profiles only

import Worldbanner from '../components/Worldbanner';
import Sidebar2 from '../components/Sidebar2';



const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Sidebar2 isOpen={isOpen} toggle={toggle} />
            <Navbar3 toggle={toggle} />
            <Worldbanner/>
            
            
            
            

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
