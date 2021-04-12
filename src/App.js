import React,{Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./component/Navigation"
import './App.scss';
import {Container,Row,Col} from 'react-bootstrap'
//import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Fluid from "./component/Fluid"
import Forms from "./component/Forms"


const App = () => {

  return (
    <Fragment>

     <Container fluid >
     <Row>
    <Col className="bg-info text-white" xs={7} md={9}>This is the header</Col>
    <Col className="bg-info text-white" xs={5} md={3}>And here could be something more</Col>
 </Row> 
</Container>

      <Router>

        <Container fluid>
          <Row className="justify-content-center">
            <Navigation />
          </Row>
          </Container>

          <Container fluid>
        
            <section>

              <Switch>      
            
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/fluid' component={Fluid}/>
                <Route exact path='/form' component={Forms}/>


              </Switch>

            </section>
      
        </Container>

      </Router>
    </Fragment>
  );
}; // END App


export default App;
