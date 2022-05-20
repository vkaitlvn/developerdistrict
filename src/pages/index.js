// page that puts all components together for the landing page, each component is called below and this file allows it all to be put together
import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import ChatSection from '../components/ChatSection'
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
            <ChatSection />
            <World />
            <Profiles />

            <Footer/>
            {/* calls all components that make up the landing page */}
            
            

    

        </div>

    );
}

export default Home;
