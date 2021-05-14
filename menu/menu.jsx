import React, { Component } from 'react';
import Logo from '../Assests/images/logo.png';
import Arrowicon from '../Assests/images/left-arrow-icon.png';
import './style.css';

class menu extends Component {
    render() {
        return (
            <>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 col-12 menu-conatiner">
                           <div className="column">
                           <div className="col-md-4">
                           <img  className="arrowicon" src={Arrowicon}/>
                           <img className="logoimg" src={Logo}/>
                           </div>
                           <div className="column menu-btn">
                               <button>Home</button>
                               <button>Reports</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Sports Centers</button>
                               <button>Bookings</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Sports Tournaments</button>
                               <button>Tournament Registrations</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Runs</button>
                               <button> Run Registrations</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Membership Plans</button>
                               <button>Active Memberships</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Promo Banners</button>
                               <button>Explore More</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Master Data</button>
                               <button>Configuration</button>
                           </div>
                           <div className="column menu-btn">
                               <button>Coaching</button>
                               <button>Pricing</button>
                           </div>
                           </div>
                           
                          
                       </div>
                       
                   </div>

               </div>
            </>
        );
    }
}

export default menu;