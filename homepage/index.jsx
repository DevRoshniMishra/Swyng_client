import React, { Component } from 'react';
import Logo from '../Assests/images/logo.png';
import Arrowicon from '../Assests/images/left-arrow-icon.png';
import * as IoIcons from "react-icons/io";
import './style.css';

class index extends Component {
    render() {
        return (
            <>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 col-12 ">
                           <div>
                           <img  className="arrow-icon" src={Arrowicon}/>
                           <img className="logoimg" src={Logo} />
                           </div>
                           <div className="text-center title">
                               <p>Summary</p>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-12 date-section">
                           <p>Today, Fri 30 Aug 2020</p>
                       </div>
                       <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Total Bookings <br/><span>267</span></button>
                           <button>Total Booked Slots <br/><span>387</span></button>
                           <button>Bookings GMV<br/><span>Rs. 90,000</span></button>
                           <button>Registrations <br/><span>267</span></button>
                           <button>Registrations GMV<br/><span>Rs. 67,000</span></button>
                           <button>New Users <br/><span>78</span></button>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-12 date-section">
                           <p>Previous Week, Mon 18 Aug 2020-  Sun 25 Aug 2020</p>
                       </div>
                       <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Total Bookings <br/><span>267</span></button>
                           <button>Total Booked Slots <br/><span>387</span></button>
                           <button>Bookings GMV<br/><span>Rs. 90,000</span></button>
                           <button>Registrations <br/><span>267</span></button>
                           <button>Registrations GMV<br/><span>Rs. 67,000</span></button>
                           <button>New Users <br/><span>78</span></button>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-12 date-section">
                           <p>Centres On Boarded</p>
                       </div>
                       <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Badminton <br/><span>4</span></button>
                           <button>Squash <br/><span>4</span></button>
                           <button>Football<br/><span>4</span></button>
                           <button>Others<br/><span>4</span></button>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 btn-section ">
                           <button className="btn btn-ref">Refresh</button>
                           <button className="btn btn-ref">More Reports</button>
                       </div>
                       
                   </div>
               </div>
               
            </>
        );
    }
}

export default index;