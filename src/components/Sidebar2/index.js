import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements';

import { Button } from '../ButtonElements3';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>

        <Button Link to ={{ pathname: "https://developerdistrict.netlify.app/"}} target="_blank" aria-label="DDHome page"
        >DDHome</Button>

        <Button Link to ={{ pathname: "https://ddchat.netlify.app/"}} target="_blank" aria-label="DDChat"
        >DDChat</Button>
          
        <Button to="/profiles" target="_blank" aria-label="DDProfiles"
        >DDProfiles</Button>

        <Button to="/worldsim" target="_blank" aria-label="worldsim page"
        >Worldsim</Button>

          

        </SidebarMenu>


      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
