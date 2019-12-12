import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ReactFormBuilder } from "react-form-builder2";
import "../styles.css";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrintButton from "./PrintButton";
import FormSubmit from './FormSubmit'
import axios from 'axios';

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
      <div style={{marginTop: 20}}>
        <ReactFormBuilder onLoad={this.onLoad} onPost={this.onPost} />
        <PrintButton  id={"react-form-builder-preview pull-left"} label={"Download Form"}/>
        <FormSubmit handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default CustomizeFormBuilder;