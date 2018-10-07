import React from 'react';
import { Alert, Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';


export default class GeneralInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
      FirstName :'',
      LastName :'',
      Gender :'',
      Age:'',
      ValidateTriggered:false,
      isValid:true
    }
  }
  
  validate = (e) => {    
    var isFormValid= true;
    if(this.state.FirstName ==='' || this.state.Gender === '' || this.state.Age === ''){
        isFormValid = false;
        this.setState({ValidateTriggered:true})
        this.setState({isValid:false})
    }
    if(isFormValid){
      this.setState({isValid:true})
      this.changestep('Contact')
    }    
  }

  update = (e) => {        
    var obj = {};
    obj[e.target.name] = e.target.value;    
    this.setState(obj)    
  };

  changestep(e){    
    this.props.changestep(e);
  }

  render() {
    return (
      <Form>
        <Row>
          <h4>Informasi Umum</h4>            
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
              <Input type="text" name="FirstName" id="FirstName" placeholder="Nama Depan" 
              onChange={this.update}
              />
              {this.state.FirstName ==='' 
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>Wajib diisi</p>}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>          
              <Input type="text" name="LastName" id="LastName" placeholder="Nama Belakang" 
              onChange={this.update} />
              {this.state.LastName ==='' 
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>Wajib diisi!</p>}              
            </FormGroup>              
          </Col>
        </Row>
        <Row>                  
          <Col>
            <FormGroup>              
              <Input type="select" 
              name="Gender" id="SelectGender" onChange={this.update}>            
                <option disabled="disabled" defaultValue>Jenis Kelamin</option>
                <option value="Laki-Laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>            
              </Input>
              {this.state.Gender ==='' 
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>Wajib diisi!</p>}
            </FormGroup>
          </Col>          
            <FormGroup>
              <Input type="number" name="Age" id="Age" placeholder="Umur" onChange={this.update} min="0"/>
              {this.state.Age ==='' 
              &&  this.state.ValidateTriggered 
              && <p style={{color:'#FF0000'}}>Wajib diisi</p>}
            </FormGroup>
          <Col>
          </Col>
        </Row>                
        <Button color="primary" block size="lg" onClick={ this.validate }>Next</Button>
      </Form>
    );
  }
}