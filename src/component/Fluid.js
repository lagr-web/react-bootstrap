import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Fluid = () => {
    
  return (
<>
<Container fluid="sm" >
<Row className="justify-content-md-center"><Col>fluid</Col></Row>
<Row><Col>fluid 1</Col></Row>
</Container>
</>

  )
};

export default Fluid;
