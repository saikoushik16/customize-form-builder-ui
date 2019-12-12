import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyReactFormBuilder from "./components/MyReactFormBuilder";
import Forms from "./components/forms.component";

function App() {
    return (<Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">React Axios Tutorial</a>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/create-new-form"}>Create Form</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/forms"}>Forms List</Link>
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
                <Route path="/create-new-form" component={MyReactFormBuilder} />
                <Route path="/forms" component={Forms} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    );
  }
  
  export default App;