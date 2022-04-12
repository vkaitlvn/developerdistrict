import React, {useState} from 'react';
import Footer from '../components/Footer';

import Navbar3 from '../components/WorldSim/Navbar3'
// new navbar for profiles only

import Sidebar from '../components/Sidebar';





const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar3 toggle={toggle} />
            
            
            
            

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
