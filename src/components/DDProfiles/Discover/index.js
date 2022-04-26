import React from 'react';

import './discover.css';

import { Button } from '../../ButtonElements';

import{
  FiGithub,
  FiTwitter,
  FiInstagram
} from 'react-icons/fi';




const Discover = () => {
  

  

  return (
    
    <div class="box">
      <div class="container">
     	  <div class="row">
         <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div class="box-part text-center">
                             
                             
                 <div class="title">
                   <h4>
                     <FiGithub/>
                   </h4>
                   <h4>GITHUB</h4>
                 </div>
                             
               
                             
                 <a href="https://github.com/">Learn More</a>
                             
               </div>
     
               
     
         
               </div>
			 
			    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
            <div class="box-part text-center">
                          
                          
              <div class="title">
                <h4>
                  <FiInstagram/>
                </h4>
                {/* icon here */}
                <h4>INSTAGRAM</h4>
                {/* social media name here */}
              </div>
                          
                          
              <a href="https://www.instagram.com/">Learn More</a>
              {/* user's link here */}
                          
            </div>
				  </div>	 

				{/* next box */}
				 <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="box-part text-center">
					    
                    
						<div class="title">
              <h4>
                <FiTwitter/>
              </h4>
							<h4>TWITTER</h4>
						</div>
                        
						
                        
						<a href="https://twitter.com/">Learn More</a>
                        
					 </div>
				</div>	


				        

          

		
		      </div>	

          {/* Button that redirects users to ddchat advertising it as a way to message certain users */}
          <Button Link to ={{ pathname: "https://ddchat.netlify.app"}} target="_blank" aria-label="DDChat">
                MESSAGE USER
          </Button>	
        </div>
    </div>



   
    
  );
};

export default Discover;
