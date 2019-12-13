import "../styles.css";
import axios from 'axios';
import PrintButton from "./PrintButton";
import React, { Component } from "react";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Label, Input } from 'reactstrap';
import SignatureCanvas from 'react-signature-canvas'
import { ReactFormBuilder } from "react-form-builder2";

class EditCustomizeFormBuilder extends Component {

    state = {
      formContent: [],
      id:-1
    };

   onLoad = async() => {
    let url = 'http://axilweb-assignment.do/api/documents/'+this.props.match.params.id;
    const loadData = await axios.get(url);
    let formContent = (loadData.data.pdf_form_content)? loadData.data.pdf_form_content: [];
    this.setState({ 
        formContent,
        id: loadData.data.id,
        name: loadData.data.name
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

  handleSubmit = () => {
      //e.preventDefault()
      const formObject = {
          name: this.state.name,
          pdf_form_content: this.state.formContent
      };
      let url = 'http://axilweb-assignment.do/api/documents/'+this.state.id;
      console.log({ formObject , url});
      axios.put(url, formObject)
          .then((res) => {
              console.log('Edit success:',res)
          }).catch((error) => {
              console.log('Edit err:',error)
      });
  }

  handleChange = event  => {

    const { value, name } = event.target;

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

          <div style={{border: 5, borderColor: '#000000'}} >
            <Label>Signature</Label>
            <SignatureCanvas penColor='green'
              canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} clearButton="true" ref="mySignature" />
          </div>

          <div>
            <PrintButton  id={"react-form-builder-preview pull-left"} label={"Download Form"} name={this.state.name}/>
          </div>

          <div style={{marginTop: 10}}>
            <form>
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