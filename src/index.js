import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ReactFormBuilder } from "react-form-builder2";
import "./styles.css";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrintButton from "./PrintButton";
import { Button } from "reactstrap";
import axios from 'axios';

// const data =  [
// ];

// class App extends Component {
//   state = {
//     fromContent: []
//   };
//   onLoad = () => {
//     console.log(" Load From Data");
//     return new Promise((resolve, reject) => {
//       resolve(data);
//     });
//   };
//   onPost = data => {
//     console.log("Post Data", data);
//     this.setState({
//       fromContent: data
//     });
//   };

//   onSubmitData = () => {
//     console.log("onSubmitData fromContent", this.state.fromContent);
//   };

//   onSubmit = (e) => {
//       //e.preventDefault()
//       console.log("onSubmit fromContent=>", this.state.fromContent);
//       const formObject = {
//           //name: this.state.name,
//           name: 'this.state.name',
//           pdf_form_content: this.state.fromContent
//       };

//       axios.post('http://axilweb-assignment.do/api/documents', formObject)
//           .then((res) => {
//               console.log(res.data)
//           }).catch((error) => {
//               console.log(error)
//           });

//       //this.setState({ name: '', email: '' });
//       this.setState({
//         fromContent: []
//       });
//       this.onLoad();
//   }

//   render() {
//     return (
//       <Fragment>
//         <ReactFormBuilder onLoad={this.onLoad} onPost={this.onPost} />
//         <PrintButton
//           id={"react-form-builder-preview pull-left"}
//           label={"Download Form"}
//         />
//         <Button onClick={this.onSubmit}>Submit Form</Button>
//       </Fragment>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



//====
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);
//====