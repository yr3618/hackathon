import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import all views
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import Charities from "./Views/Charities";
import NavigationBar from "./Navbars/Navbar";
import Footer from "./Navbars/Footer";
import Help from "./Views/Help";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/charities" component={Charities} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
