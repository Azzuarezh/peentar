import React from 'react';
import { 
	Container,	
	Row, 
	Col } from 'reactstrap';
import Tabs from './Tabs';

export default class RegistrationForm extends React.Component {  
  render() {
    return (
     <Container>               
        <Row>
        	<Col>&nbsp;</Col>
        </Row>        
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
				<Tabs/>          	
          </Col>
        </Row>
      </Container>      
    );
  }
}