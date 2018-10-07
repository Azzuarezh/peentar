import React from 'react';
import { Alert, Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import MaskedInput from 'react-text-mask';
export default class Contact extends React.Component {
 constructor(props){
    super(props);
    this.state = {      
      Email :'',
      Phone :'',      
      ValidateTriggered:false,
      isValid:true,      
      isValidEmail:true,
      MsgErrorEmail:''
    }
  }
  
  validate = (e) => {          
    var re = /\S+@\S+/;
    var testValidate = re.test(String(this.state.Email).toLowerCase());    
    var isFormValid = true;
    
    if(this.state.Email ===''){                              
        this.setState({ValidateTriggered:true})        
        this.setState({MsgErrorEmail:'Wajib diisi'})
        isFormValid = false;
    }else if(!testValidate){
          this.setState({MsgErrorEmail:'Format Email Tidak Sesuai.'})
          this.setState({ValidateTriggered:true})                  
          this.setState({isValidEmail:false})
          isFormValid = false;
    }else{
      this.setState({isValidEmail:true})
    }

    if(this.state.Phone === ''){
      isFormValid = false;      
    }

    if(isFormValid){
      this.setState({isValid:true})
      this.changestep('Password')
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
          <h4>Kontak</h4>
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
              <Input type="email" name="Email" id="Email" placeholder="Alamat Email" 
              onChange={this.update}
              />
               {(this.state.Email ===''|| !this.state.isValidEmail)
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>{this.state.MsgErrorEmail}</p>}              
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>                        
               <MaskedInput
                  type="Text" name="Phone" id="Phone" placeholder="Nomor Telepon" className="form-control"
                  mask={['(', /[0-9]/, /\d/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  onChange={this.update}
                />
                {this.state.Phone ===''
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>Wajib diisi!</p>}
            </FormGroup>              
          </Col>
        </Row>            
        <Button color="primary" block size="lg" onClick={ this.validate }>Next</Button>
      </Form>
    );
  }
}