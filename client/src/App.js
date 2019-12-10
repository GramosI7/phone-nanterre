import React from "react";
import Home from "./Screens/Home";
import Edit from "./Screens/Edit";
import Addd from "./Screens/Addd";
import AllPhone from "./Screens/AllPhone";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    // 	<div>
    // 		 <Nav />

    // 		<Switch>
    // 			<Route path="/add">
    // 				<Addd />
    // 			</Route>
    // 			<Route path="/">
    // 				<Home />
    // 			</Route>
    // 			<Route exact path="/Edit" component ={Edit}>

    // 				<Edit />
    // 			</Route>

    // 		</Switch>
    // 	</div>
    //   <Footer />
    // </Router>

    <Router>
      <Nav />
      <Switch>
        <Route exact path="/AddPhone" component={Addd} />
        <Route exact path="/AllPhone" component={AllPhone} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
