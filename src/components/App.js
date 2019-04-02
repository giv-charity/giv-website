import React, { Component } from "react";
import "../assets/css/App.css";

import LandingPage from "./LandingPage.js";
import Footer from "./Footer.js";
import PartnerPage from "./PartnerPage.js";
import WhyPage from "./WhyPage";
import Form from "./FormPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <WhyPage />
        <Form />
        <PartnerPage />
        <Footer />
      </div>
    );
  }
}

export default App;
