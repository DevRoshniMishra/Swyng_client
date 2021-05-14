import React , {useState} from 'react';
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import {Sidebar} from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons'
import Logo from '../Assests/images/logo.png';


function Navbar() {
    const [sidebar , setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'black'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">  
            <IoIcons.IoIosArrowBack onClick={showSidebar}/>
            <img className="logoimg" src={Logo}/>
         
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                <Link to="#" className="menu-bars">  
            <IoIcons.IoIosArrowForward />
            </Link>
                </li>
                {Sidebar.map((item, index) => {
                   return (
                    <li key={index} className={item.cName}> 
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    </li>
                   )
                })}
            </ul>

        </nav>
        </IconContext.Provider>
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

export default Navbar;