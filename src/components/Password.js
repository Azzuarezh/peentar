import React from 'react';
import { Alert, Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
export default class Password extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
      Password :'',
      ReenterPassword :'',      
      ValidateTriggered:false,
      isValid:true,      
      IsMatchWithPassword:true,
      MsgErrorPassword:''
    }
  }
  
  validate = (e) => {              
    var testValidate = (this.state.Password === this.state.ReenterPassword)
    var isFormValid = true;
    
    if(this.state.Password ==='' || this.state.ReenterPassword ===''){                              
        this.setState({ValidateTriggered:true})
        this.setState({MsgErrorPassword:'Wajib diisi'})        
        isFormValid = false;
    }else if(!testValidate){
          this.setState({MsgErrorPassword:'Password Tidak Sama.'})
          this.setState({ValidateTriggered:true})                  
          this.setState({IsMatchWithPassword:false})
          isFormValid = false;
    }else{
      this.setState({isValidEmail:true})
    }

    if(isFormValid){
      this.setState({isValid:true})
      this.changestep('Success')
    }else{
      this.setState({isValid:false})
    }    
  }

  update = (e) => {        
    var obj = {};
    obj[e.target.name] = e.target.value;
    console.log('Object :',obj)    
    this.setState(obj)    
  };

  changestep(e){    
    this.props.changestep(e);
  }


  render() {
    return (
      <Form>
        <Row>
          <h4>Sandi</h4>
        </Row>
        { !this.state.isValid &&
          <Row>
          <Alert color="danger">
            Maaf, Data belum lengkap
          </Alert>
        </Row>
        }
        <Row>
          <Col>
            <FormGroup>          
              <Input type="Password" name="Password" id="Password" placeholder="Kata Sandi" 
              onChange={this.update} />
               {this.state.Password ===''
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>Wajib diisi!</p>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>          
              <Input type="password" name="ReenterPassword" id="ReenterPassword" placeholder="Ulangi Kata Sandi"
              onChange={this.update} />
              {(this.state.ReenterPassword ===''|| !this.state.IsMatchWithPassword)
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>{this.state.MsgErrorPassword}</p>}
            </FormGroup>              
          </Col>
        </Row>            
        <Button color="primary" block size="lg" onClick={ this.validate }>Next</Button>
      </Form>
    );
  }
}