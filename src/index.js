import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from './store'

const HeaderLogo = () => {
  return (
    <div className="logo-wrapper sticky">
      <div className="logo-container">
        <div className="logo">
          <svg className='logo-svg' viewBox="0 0 145 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.23 0L0 60.6522H5.44601L27.23 11.4565L51.0563 62H55.8216L59.9061 53.913H55.1408L53.7793 56.6087L27.23 0Z" fill="#F5F5F5"/>
            <path d="M47.6526 0H40.8451L70.1174 62L96.6667 5.3913L97.3474 6.73913H102.113L98.7089 0H93.9437L70.1174 51.2174L47.6526 0Z" fill="#F5F5F5"/>
            <path d="M112.324 0L83.0516 62H88.4977L112.324 10.7826L135.469 62H140.915L145 53.913H140.235L138.192 56.6087L112.324 0Z" fill="#F5F5F5"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

console.log(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <HeaderLogo />
        <div> 
          <App />
        </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
