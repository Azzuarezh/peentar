import React from 'react';
import {  Card, CardText, CardBody, CardImg ,CardTitle, Row,Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas  } from '@fortawesome/free-solid-svg-icons'
library.add(fas )

const gif = require('../assets/yeay.webp');

export default class Success extends React.Component {
  render() {    
    return ( 
      <div>
        <Card>
          <CardImg top width="100%" src={gif} alt="Nice" />                  
          <CardBody>
            <Row>
              <Col md={{ size: 8, offset: 5 }}>
                <CardTitle><h3>Selamat!!!</h3></CardTitle>                  
              </Col>
            </Row>          
            <Row>
              <Col md={{ size: 8, offset: 3 }}>                                  
                  <CardText>Anda Berhasil Terdaftar di TK Bermain Terus</CardText>                  
              </Col>
            </Row>                        
          </CardBody>
        </Card>
      </div>
      );
  }
}