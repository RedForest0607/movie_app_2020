import React from "react";
import "./App.css";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

function App(){
  return(
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component = {About} />
    {/* exact로 라우터 끼리 겹치는것을 막아준다 */}
  </HashRouter>
  );
}
export default App;