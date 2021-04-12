import React from 'react';
import {Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from "react-bootstrap/ListGroup"

const Navigation = () => {

  return (
    
      <nav>
<ListGroup horizontal variant="secondary">
    
<ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
        
<ListGroup.Item><Link to="/about">About</Link></ListGroup.Item>
        
<ListGroup.Item> <Link to="/contact">Contact</Link></ListGroup.Item>

<ListGroup.Item> <Link to="/fluid">Fluid</Link></ListGroup.Item>

<ListGroup.Item> <Link to="/form">Forms</Link></ListGroup.Item>

  </ListGroup>
  </nav>
   
  );
  
};

export default Navigation;
