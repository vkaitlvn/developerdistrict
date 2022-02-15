import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat'
import World from '../components/World'
import Profiles from '../components/Profiles'





const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <InfoSection />
            <Services />
            <Chat />
            <World />
            <Profiles />

            <Footer/>
            
            

    

        </div>

    );
}

export default Home;
