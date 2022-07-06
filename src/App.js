import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home} from "./steps/Home"
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Result} from './steps/Result'
import { ListClients } from "./store/listClients";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/step1" component={Step1}/>
      <Route path="/step2" component={Step2}/>
      <Route path="/step3" component={Step3}/>
      <Route path="/result" component={Result}/>
      <Route path="/listClients" component={ListClients} />
    </Router>
  )
}

export default App;
