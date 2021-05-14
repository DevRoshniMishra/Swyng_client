import React, { Component } from 'react';
import Login from './login/login';
import Menu from './menu/menu';
import HomePage from './homepage';
import Report from './reports'
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import {BrowserRouter as Router ,  Route , Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <>
               
                 <Router>
               
                 <Login/>
                <Menu/>
                 <HomePage/>
                 <Report/>
                     <Switch>
                         <Route path="/"></Route>
                     </Switch>
                 </Router>
                 
            </>
        );
    }
}

export default App;