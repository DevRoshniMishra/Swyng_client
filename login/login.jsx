import React, { Component } from 'react';
import Logo from '../Assests/images/logo.png';
import Icon1 from '../Assests/images/icon1.png';
import Icon2 from '../Assests/images/icon2.png';
import Icon3 from '../Assests/images/icon3.png';
import Icon4 from '../Assests/images/icon4.png';
import Icon5 from '../Assests/images/icon5.png';
import Icon6 from '../Assests/images/icon6.png';
import './style.css';


class login extends Component {
    render() {
        return (
            <>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 col-sm-6 col-12 text-center">
                           <img className="logo" src={Logo}/>
                           <div>
                               <form className="login-container">
                                   <label className="email">Email Id</label><br/>
                                   <input className="email-intag" type="email" /><br/>
                                   <label className="password">Password</label><br/>
                                   <input className="pass-intag"  type="password" /><br/>
                                   <a className="crediential-link" href="#">Forget Password</a><br/>
                                   <button type="button" className="btn login-btn btn-primary">Sign in</button>
                               </form>
                           </div>
                           <div className="icon text-center">
                               <img src={Icon1}/>
                               <img src={Icon2}/>
                               <img src={Icon3}/>
                               <img src={Icon4}/>
                               <img src={Icon5}/>
                               <img src={Icon6}/>
                           </div>
                       </div>

                   </div>
                   </div> 
            </>
        );
    }
}

export default login;