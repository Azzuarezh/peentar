import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,Row,Col,Card, CardBody } from 'reactstrap';
import classnames from 'classnames';
import GeneralInfo from './GeneralInfo';
import Contact from './Contact';
import Password from './Password';
import Success from './Success';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas  } from '@fortawesome/free-solid-svg-icons'
library.add(fas )


export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.changestep = this.changestep.bind(this);
    this.state = {
      activeTab: 'GeneralInfo',
      currentStep :'GeneralInfo'
    };
  }

  changestep(step){
    this.setState({currentStep : step})
    this.toggle(step)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,        
      });
    }
  }
  render() {
    return (
      <div>       
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'GeneralInfo' })}
              onClick={() => { this.toggle('GeneralInfo'); }}
              id="Nav-GeneralInfo"
            >            
              <FontAwesomeIcon icon="info-circle" 
              className={classnames({ 'text-info': this.state.activeTab === 'GeneralInfo' })} />              
            </NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Contact' })}
              onClick={() => { this.toggle('Contact'); }} 
              disabled={this.state.currentStep === 'GeneralInfo'}
              id="Nav-Contact"
            >            
              <FontAwesomeIcon icon="envelope" 
              className={classnames({ 'text-info': this.state.activeTab === 'Contact' })}/>
            </NavLink>            
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Password' })}
              onClick={() => { this.toggle('Password'); }}
              disabled={this.state.currentStep === 'GeneralInfo' || this.state.currentStep === 'Contact'}
              id="Nav-Password"
            >            
              <FontAwesomeIcon icon="lock"
              className={classnames({ 'text-info': this.state.activeTab === 'Password' })} />
            </NavLink>            
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Success' })}
              onClick={() => { this.toggle('Success'); }}
              disabled={this.state.currentStep === 'GeneralInfo' || this.state.currentStep === 'Contact'
              || this.state.currentStep === 'Password' }
              id="Nav-Success"
            >
              <FontAwesomeIcon icon="check"
              className={classnames({ 'text-success': this.state.activeTab === 'Success' })} />  
            </NavLink>            
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="GeneralInfo">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <GeneralInfo changestep={this.changestep}/>
                  </Col>
            </Row>
              </CardBody>
            </Card>          
          </TabPane>
          <TabPane tabId="Contact">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <Contact changestep={this.changestep}/>
                  </Col>
                </Row>
              </CardBody>
            </Card>              
          </TabPane>
          <TabPane tabId="Password">            
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="12">
                      <Password changestep={this.changestep}/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
          </TabPane>
          <TabPane tabId="Success">            
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="12">
                      <Success/>
                    </Col>
                  </Row>    
                </CardBody>
              </Card>
              
          </TabPane>
        </TabContent>
      </div>
    );
  }
}