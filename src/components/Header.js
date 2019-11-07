import React from 'react';
import './Header.css'

const Header = () => {

    
        return  (

         <div>
             <section className="header">
            <nav className="navbar navbar-expand-lg  bg-white">
                <a className="navbar-brand netflix" href="/">NETFLIX</a>
                
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarTogglerDemo02">
                    <ul className="navbar-nav  ">
                         <li className="nav-item active">
                            <a className="nav-link" href="/">Sign In</a>
                         </li>
                        <li className="nav-item ">
                             <a className="nav-link red" href="/">Sign Up</a>
                        </li>                        
                    </ul>
                   
                     </div>
                     </nav>
                </section>
                <section className="video ">
        <div>                                            	
            <video id="background-video " loop autoPlay>
                            <source src="https://res.cloudinary.com/yungdenzel/video/upload/v1572699511/youtube_nnmhsd.mp4" type="video/mp4" />
            />            
            </video>   
                        <h1 className="text-white mar"> Connect to Netflix using <br></br>your favourite<br></br>devices</h1>          
        </div>
           </section>
           
            </div>
         

    )
    }







export default Header;