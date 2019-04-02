import React, { Component } from "react";
import "../assets/css/App.css";

import Footer from "./Footer.js";
import PartnerPage from "./PartnerPage.js";
import Form from "./FormPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <PartnerPage />
        <Footer />
      </div>
    );
  }
}

export default App;
