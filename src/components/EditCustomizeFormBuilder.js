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

let data =  [];

class EditCustomizeFormBuilder extends Component {

  componentDidMount(){
    console.log('componentDidMount=> EditCustomizeFormBuilder');
  }
  state = {
    formContent: [],
    id:-1
  };

   onLoad = async() => {
    console.log("Load From Data");

    let url = 'http://axilweb-assignment.do/api/documents/'+this.props.match.params.id;
    console.log({url});

    const loadData = await axios.get(url);
    console.log({loadData});
    let formContent = (loadData.data.pdf_form_content)? loadData.data.pdf_form_content: [];
    this.setState({ 
              formContent,
              id: loadData.data.id,
              name: loadData.data.name
    });
    // return axios.get(url)
    //     .then(res => {
    //         console.log("Edit  documents onLoad:",res.data);
    //         let formContent = (res.data.pdf_form_content.task_data)? res.data.pdf_form_content.task_data: [];
    //         this.setState({ 
    //           formContent,
    //           id: res.data.id,
    //           name: res.data.name
    //         });

    //         console.log('onLoad state:',this.state)
    //        return formContent;
    //     }).catch((error) => {
    //       console.log('Edit onLoad err:',error)
    //     });
    console.log('onLoad state:',this.state)
    return new Promise((resolve, reject) => {
      resolve(formContent);
    });
  };

  onPost = data => {
    console.log("Post Data", data);
    this.setState({
      formContent: data.task_data
    });
  };

  handleSubmit = () => {
      //e.preventDefault()
      console.log("Edit onSubmit formContent=>", this.state.formContent);
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
            <PrintButton  id={"react-form-builder-preview pull-left"} label={"Download Form"}/>
          </div>
          {/* <div style={{border: 1}}>
            <FormSubmit handleSubmit={this.handleSubmit} name={getName}/>
          </div> */}

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