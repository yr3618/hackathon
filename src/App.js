import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import all views
import Home from "./Home";
import ContactUs from "./ContactUs";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
import Help from "./Help";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
