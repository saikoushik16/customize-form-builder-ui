import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ReactFormBuilder } from "react-form-builder2";
import "./styles.css";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrintButton from "./PrintButton";
import { Button } from "reactstrap";
import axios from 'axios';

// POST: http://axilweb-assignment.do/api/documents

const data =  [
  {
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "dateFormat" : "MM/dd/yyyy",
    "defaultToday" : false,
    "element" : "DatePicker",
    "field_name" : "date_picker_E11A01FD-8B58-4C5B-AB35-7C3039863848",
    "id" : "380E1E27-D945-4881-9EE6-95691BE21EF0",
    "label" : "Placeholder Label",
    "readOnly" : false,
    "required" : false,
    "showTimeSelect" : false,
    "showTimeSelectOnly" : false,
    "text" : "Date",
    "timeFormat" : "hh:mm aa"
  },
  {
    "bold" : false,
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "content" : "Placeholder Text...",
    "element" : "Header",
    "id" : "A308E2D4-DC23-4C7F-B527-E4615462CFBB",
    "italic" : false,
    "required" : false,
    "static" : true,
    "text" : "Header Text"
  },
  {
    "bold" : false,
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "content" : "Placeholder Text...",
    "element" : "Label",
    "id" : "2EA3401F-0F39-49DE-8FF4-35A3C9BCBCAA",
    "italic" : false,
    "required" : false,
    "static" : true,
    "text" : "Label"
  },
  {
    "bold" : false,
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "content" : "Placeholder Text...",
    "element" : "Paragraph",
    "id" : "F7A739B1-F086-4B4A-963A-164F49CD2320",
    "italic" : false,
    "required" : false,
    "static" : true,
    "text" : "Paragraph"
  },
  {
    "bold" : false,
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "LineBreak",
    "id" : "719DFF77-E513-4DB3-B37A-2CA6981CDD95",
    "italic" : false,
    "required" : false,
    "static" : true,
    "text" : "Line Break"
  },
  {
    "canHaveAlternateForm" : true,
    "canHaveAnswer" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "Dropdown",
    "field_name" : "dropdown_429C02AD-1988-49D2-86F0-432E81B68873",
    "id" : "E5AF82D9-C745-4BFF-8EE9-4AFD23C1CB42",
    "label" : "Placeholder Label",
    "options" : [
      {
        "key" : "dropdown_option_03126AED-35C5-4692-BAEB-281BA319C2E5",
        "text" : "Place holder option 1",
        "value" : "place_holder_option_1"
      },
      {
        "key" : "dropdown_option_BD160C55-C4F7-43ED-B972-861687AC7761",
        "text" : "Place holder option 2",
        "value" : "place_holder_option_2"
      },
      {
        "key" : "dropdown_option_2950C739-86C9-4B93-852B-0F4AC71696FD",
        "text" : "Place holder option 3",
        "value" : "place_holder_option_3"
      }
    ],
    "required" : false,
    "text" : "Dropdown"
  },
  {
    "canHaveAlternateForm" : true,
    "canHaveAnswer" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "Tags",
    "field_name" : "tags_0B3F83DB-A7D8-4E4A-B3BC-7E0DC6BB8EFB",
    "id" : "DA504DA5-9BCE-468A-9C63-7273A60B69F2",
    "label" : "Placeholder Label",
    "options" : [
      {
        "key" : "tags_option_B749D5DB-7FE3-46C9-9C10-34279D9BEB07",
        "label" : "Place holder tag 1",
        "text" : "Place holder tag 1",
        "value" : "place_holder_tag_1"
      },
      {
        "key" : "tags_option_69A07B84-C98D-4650-B564-DF1156499814",
        "label" : "Place holder tag 2",
        "text" : "Place holder tag 2",
        "value" : "place_holder_tag_2"
      },
      {
        "key" : "tags_option_C1E79862-6CE1-41D9-B561-08DB026602BE",
        "label" : "Place holder tag 3",
        "text" : "Place holder tag 3",
        "value" : "place_holder_tag_3"
      }
    ],
    "required" : false,
    "text" : "Tags"
  },
  {
    "canHaveAlternateForm" : true,
    "canHaveAnswer" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "Checkboxes",
    "field_name" : "checkboxes_C0E6A5A8-B695-4CD4-9310-B54CB37D2CAE",
    "id" : "9A4D919E-4032-4911-A539-3EED1D30A253",
    "label" : "Placeholder Label",
    "options" : [
      {
        "key" : "checkboxes_option_C038E62B-BD09-4278-835E-8EF5B0799972",
        "text" : "Place holder option 1",
        "value" : "place_holder_option_1"
      },
      {
        "key" : "checkboxes_option_AAA75A82-D202-4610-8884-323B2E357C53",
        "text" : "Place holder option 2",
        "value" : "place_holder_option_2"
      },
      {
        "key" : "checkboxes_option_95AFCFA8-914F-4AD4-BFC8-C72F99FA4F84",
        "text" : "Place holder option 3",
        "value" : "place_holder_option_3"
      }
    ],
    "required" : false,
    "text" : "Checkboxes"
  },
  {
    "canHaveAlternateForm" : true,
    "canHaveAnswer" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "TextArea",
    "field_name" : "text_area_01ACD760-1B62-45F1-AB8D-0BB98179189A",
    "id" : "620DEB6B-9F3A-4D1D-9FF0-392B8E5EFFDB",
    "label" : "Placeholder Label",
    "required" : false,
    "text" : "Multi-line Input"
  },
  {
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "Image",
    "field_name" : "image_4FE14FC1-B8F0-486F-9F54-67C5A6B76F11",
    "id" : "508ACF9F-3FAA-4542-9878-57BE9A8C7DD0",
    "required" : false,
    "src" : null,
    "text" : "Image"
  },
  {
    "canHaveAlternateForm" : true,
    "canHaveDisplayHorizontal" : true,
    "canHaveOptionCorrect" : true,
    "canHaveOptionValue" : true,
    "canHavePageBreakBefore" : true,
    "element" : "Camera",
    "field_name" : "camera_9FA219E2-9C8D-4152-9324-A634F341BDFD",
    "id" : "71766097-E986-47A2-A9F8-EE5FADDF80DC",
    "label" : "Placeholder Label",
    "required" : false,
    "text" : "Camera"
  }
];
class App extends Component {
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

  onSubmitData = () => {
    console.log("onSubmitData fromContent", this.state.fromContent);
  };

  onSubmit = (e) => {
      //e.preventDefault()
      console.log("onSubmit fromContent=>", this.state.fromContent);
      const formObject = {
          //name: this.state.name,
          name: 'this.state.name',
          pdf_form_content: this.state.fromContent
      };

      axios.post('http://axilweb-assignment.do/api/documents', formObject)
          .then((res) => {
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
          });

      //this.setState({ name: '', email: '' });
      this.setState({
        fromContent: []
      });
      this.onLoad();
  }

  render() {
    return (
      <Fragment>
        <ReactFormBuilder onLoad={this.onLoad} onPost={this.onPost} />
        <PrintButton
          id={"react-form-builder-preview pull-left"}
          label={"Download Form"}
        />
        <Button onClick={this.onSubmit}>Submit Form</Button>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
