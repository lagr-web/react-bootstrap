import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'


const Contact = () => {
    
  return (
<>


<Container fluid>

<Row className="justify-content-md-center">
    <Col xs={10}>1</Col>
    <Col xs={2}>2</Col>
 </Row> 
 <h1>
    Example heading <Badge variant="secondary">New</Badge>
  </h1>
  
</Container>
</>

  )
};

export default Contact;
