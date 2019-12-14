import "../styles.css";
//import axios from 'axios';
import PrintButton from "./PrintButton";
import React, { Component } from "react";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../service/ApiService";
import { Button, Label, Input } from 'reactstrap';
import SignatureCanvas from 'react-signature-canvas'
import { ReactFormBuilder } from "react-form-builder2";

class EditCustomizeFormBuilder extends Component {

    constructor(props) {
        super(props)
        this.initialSate = {
            isEmpty: false,
            formContent: [],
            id:-1
        };
        this.state = this.initialSate;
    }

   onLoad = async() => {
    
    const res = await ApiService.fetchFormById(this.props.match.params.id);
    let formContent = (res.data.pdf_form_content)? res.data.pdf_form_content: [];

    this.setState({ 
      formContent,
      id: res.data.id,
      name: res.data.name
    });
    
    return new Promise((resolve, reject) => {
      resolve(formContent);
    });
  };

  onPost = data => {
    this.setState({
      formContent: data.task_data
    });
  };

  handleSubmit = async () => {
      if (this.state.name && this.state.name.replace(/\s/g, '').length !== 0) {
         this.setState({isEmpty: false });
      } else{
          this.setState({isEmpty: true });
          return;
      }
      const formObject = {
          id:this.state.id,
          name: this.state.name,
          pdf_form_content: this.state.formContent
      };
      
      await ApiService.editForm(formObject);
  }

  handleChange = event  => {
    const { value, name } = event.target;
    if (value.replace(/\s/g, '').length !== 0) {
      this.setState({isEmpty: false });
    }

    this.setState({
        [name] : value,
    });
  };

  render() {
    return (
      <div>
          <div style={{marginTop: 20}}>
            <ReactFormBuilder onLoad={this.onLoad} onPost={this.onPost} />
          </div>

          <Label style={{color: '#12d3f1', fontWeight: 'bold', fontSize: 'md'}}>Signature Below</Label>
          <hr/>
          <div style={{border: 5, color: "##000000", borderColor: '#000000'}} >
            <SignatureCanvas penColor='black'
              canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
              // backgroundColor={rgba(0,0,0,0)}
              // clearButton="true" ref="mySignature"
               />
          </div>

          <div>
            <PrintButton  id={"react-form-builder-preview pull-left"} label={"Download Form"} name={this.state.name}/>
          </div>

          <div style={{marginTop: 10}}>
            <form>
            {this.state.isEmpty ? <span style={{color: '#dc3545', fontWeight: 'bold', fontSize: 'md' }}>Name can't be empty</span>: null}
                <Input 
                placeholder="Form name" 
                name="name"
                value={this.state.name}
                onChange={this.handleChange}/>
                <Button style={{marginTop: 5}} onClick={this.handleSubmit} value="submit">Submit Form</Button>
            </form>
          </div>
      </div>
    );
  }
}

export default EditCustomizeFormBuilder;