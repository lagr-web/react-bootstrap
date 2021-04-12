import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "./component/Navigation"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"

import './App.css';

const App = () => {

  return (
    
    <Router>

      <Navigation />
    
        <section>
          
        <Switch>
         
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>

        </Switch> 

        </section>
     
    </Router>

  ); //END return

}//END Component


export default App;
