import React, { Component } from "react";

import AllPhone from "./AllPhone";
import Addd from "./Addd";
// import Edit from './Edit'
import Footer from "../Components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AllPhone />
        {/* <Addd/> */}
        {/* <Edit /> */}
      </div>
    );
  }
}
