import "../styles.css";
import axios from 'axios';
import { Label} from 'reactstrap';
import FormSubmit from './FormSubmit'
import PrintButton from "./PrintButton";
import React, { Component } from "react";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignatureCanvas from 'react-signature-canvas'
import { ReactFormBuilder } from "react-form-builder2";

const data =  [];

class CustomizeFormBuilder extends Component {

    state = {
      fromContent: []
    };

  onLoad = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  onPost = data => {
    this.setState({
      fromContent: data.task_data
    });
  };

  handleSubmit = (event) => {
      //e.preventDefault()
      const formObject = {
          name: event.name,
          pdf_form_content: this.state.fromContent
      };

      axios.post('http://axilweb-assignment.do/api/documents', formObject)
          .then((res) => {
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
      });

      this.setState({
        fromContent: []
      });
  }

  updateFormName = (name) => {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <div>
          <div style={{marginTop: 20}}>
            <ReactFormBuilder onLoad={this.onLoad} onPost={this.onPost} />
          </div>
          <Label style={{color: '#12d3f1', fontWeight: 'bold', fontSize: 'md'}}>Signature Below</Label>
          <hr/>
          <div style={{border: 5, color: '#000000', borderColor: '#000000'}} >
            
            <SignatureCanvas penColor='black'
              canvasProps={{width: 500, height: 200}}
              // backgroundColor={rgba(0,0,0,0)}
              // clearButton="true" ref="mySignature"
               />
          </div>

          <div>
            <PrintButton  id={"react-form-builder-preview pull-left"} label={"Download Form"} name={this.state.name}/>
          </div>

          <div style={{border: 1}}>
            <FormSubmit handleSubmit={this.handleSubmit} updateFormName={this.updateFormName}/>
          </div>
      </div>
    );
  }
}

export default CustomizeFormBuilder;