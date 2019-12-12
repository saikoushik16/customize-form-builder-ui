import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ReactFormBuilder } from "react-form-builder2";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../styles.css";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrintButton from "./PrintButton";
import FormSubmit from './FormSubmit'
import axios from 'axios';
import SignatureCanvas from 'react-signature-canvas'

const data =  [
];

class CustomizeFormBuilder extends Component {

  state = {
    fromContent: []
  };

  onLoad = () => {
    console.log(" Load From Data");
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  onPost = data => {
    console.log("Post Data", data);
    this.setState({
      fromContent: data
    });
  };

  handleSubmit = (event) => {
      //e.preventDefault()
      console.log("onSubmit fromContent=>", this.state.fromContent);
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

  render() {
    return (
      <div>
          <div style={{marginTop: 20}}>
            <ReactFormBuilder onLoad={this.onLoad} onPost={this.onPost} />
          </div>
          <div style={{border: 5, borderColor: '#000000'}} >
            <Label>Signature</Label>
            <SignatureCanvas penColor='green'
              canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} clearButton="true" ref="mySignature" />
          </div>
          <div>
            <PrintButton  id={"react-form-builder-preview pull-left"} label={"Download Form"}/>
          </div>
          <div style={{border: 1}}>
            <FormSubmit handleSubmit={this.handleSubmit}/>
          </div>
      </div>
    );
  }
}

export default CustomizeFormBuilder;