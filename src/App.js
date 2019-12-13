import React from 'react';
import FormList from "./components/FormList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomizeFormBuilder from "./components/CustomizeFormBuilder";
import EditCustomizeFormBuilder from "./components/EditCustomizeFormBuilder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (<Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">Customized Form Builder</a>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create"}>Create Form</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/list-forms"}>List Form</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
  
        <div className="container" style={{marginTop: 20}}>
          <div className="row">
            <div className="col-md-12">
              <Switch>
                {/* <Route exact path='/' component={CreateUser} /> */}
                <Route path="/create" component={CustomizeFormBuilder} />
                <Route path="/edit/:id" component={EditCustomizeFormBuilder} />
                <Route path="/list-forms" component={FormList} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  }
  
  export default App;