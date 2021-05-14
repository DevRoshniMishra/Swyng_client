import React, { Component } from 'react';
import './style.css';
import Logo from '../Assests/images/logo.png';
import Arrowicon from '../Assests/images/left-arrow-icon.png';
import CirleIcon from '../Assests/images/circle-arrow-icon.png';

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
                           <button className="reportbtn" data-toggle="modal" data-target="#myModal">Bengaluru</button>
                          
                           </div>
                           
                       </div>
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 date-section">
                           <p>Centre Bookings</p>
                       </div>
                       <div className="col-md-12 col-sm-6 selector">
                          <button>Select Centre<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>Select Sport<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>From Date<i className="fa fa-calendar down-arrow-icon" aria-hidden="true"></i></button>
                          <button>To Date<i className="fa fa-calendar down-arrow-icon" aria-hidden="true"></i></button>
                       </div>
                        <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Total Bookings <br/><span>267</span></button>
                           <button>Total Booked Slots <br/><span>387</span></button>
                           <button>Bookings GMV<br/><span>Rs. 90,000</span></button>
                           <button>Registrations <br/><span>267</span></button>
                           <button>Registrations GMV<br/><span>Rs. 67,000</span></button>
                           <button style={{backgroundColor:'rgba(66, 133, 244, 1)', color:'white'}}>Generate Report & Download</button>
                           </div><br/>
                           <p>Sl. No. > Centre Name > Sport > Booking ID >  Slot Date > Slot Time > Court > Booked By (Name) >  Mobile No. > Member (if) > Type > Amount Paid</p>
                       </div> 
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 date-section">
                           <p>Memberships</p>
                       </div>
                       <div className="col-md-12 col-sm-6 selector">
                          <button>Select Centre<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>Select Sport<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>From Date<i className="fa fa-calendar down-arrow-icon" aria-hidden="true"></i></button>
                          <button>To Date<i className="fa fa-calendar down-arrow-icon" aria-hidden="true"></i></button>
                       </div>
                        <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Total Bookings <br/><span>267</span></button>
                           <button>Total Booked Slots <br/><span>387</span></button>
                           <button>Bookings GMV<br/><span>Rs. 90,000</span></button>
                           <button>Registrations <br/><span>267</span></button>
                           <button>Registrations GMV<br/><span>Rs. 67,000</span></button>
                           <button style={{backgroundColor:'rgba(66, 133, 244, 1)', color:'white'}}>Generate Report & Download</button>
                           </div><br/>
                           <p>Sl. No. > Centre Name > Sport > Booking ID >  Slot Date > Slot Time > Court > Booked By (Name) >  Mobile No. > Member (if) > Type > Amount Paid</p>
                       </div> 
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 date-section">
                           <p>Tournaments Registrations</p>
                       </div>
                       <div className="col-md-12 col-sm-6 selector">
                          <button>Tournament/Run<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>Select Sport<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>Select Category<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                      
                       </div>
                        <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Total Bookings <br/><span>267</span></button>
                           
                           <button>Bookings GMV<br/><span>Rs. 90,000</span></button>
                           
                           </div><br/>
                           <p>Sl. No. > Centre Name > Sport > Booking ID >  Slot Date > Slot Time > Court > Booked By (Name) >  Mobile No. > Member (if) > Type > Amount Paid</p>
                       </div> 
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 date-section">
                           <p>Runs Registrations</p>
                       </div>
                       <div className="col-md-12 col-sm-6 selector">
                          <button>Tournament/Run<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>Select Sport<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          <button>Select Category<i className="fa fa-angle-down down-arrow-icon" aria-hidden="true"></i></button>
                          
                       </div>
                        <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Total Bookings <br/><span>267</span></button>
                           <button>Bookings GMV<br/><span>Rs. 90,000</span></button>
                         
                           
                           </div><br/>
                           <p>Sl. No. > Centre Name > Sport > Booking ID >  Slot Date > Slot Time > Court > Booked By (Name) >  Mobile No. > Member (if) > Type > Amount Paid</p>
                       </div> 
                   </div>
               </div>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 date-section">
                           <p>Signed Up Users</p>
                       </div>
                       <div className="col-md-12 col-sm-6 selector">
                       <button>From Date<i className="fa fa-calendar down-arrow-icon" aria-hidden="true"></i></button>
                        <button>To Date<i className="fa fa-calendar down-arrow-icon" aria-hidden="true"></i></button>
                        
                         
                       </div>
                        <div className="col-md-12 col-sm-12 ">
                           <div className="menu-btn">
                           <button>Signed Up Users <br/><span>267</span></button>
                           
                          
                           
                           </div><br/>
                           <p>Sl. No. > Centre Name > Sport > Booking ID >  Slot Date > Slot Time > Court > Booked By (Name) >  Mobile No. > Member (if) > Type > Amount Paid</p>
                       </div> 
                   </div>
               </div>
               <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-6 col-12">
                   <div className="row text-center">
                       <div className="col-md-4 modal-btn">
                       <button className="highlight">Bengaluru</button>
                       <button>Chennai</button>
                       <button>Delhi NCR</button>
                       </div>
                       <div className="col-md-4 modal-btn">
                       <button>Hyderabad</button>
                       <button>Mumbai</button>
                       <button>Pune</button>
                       </div> 
                   </div>
                   <div className="row">
                    <div className="col-md-6">
                    <button className="highlight-btn">Apply Selection</button>
                    </div>
                   </div>
                 
                </div>
               
                

            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
            </>
        );
    }
}

export default index;