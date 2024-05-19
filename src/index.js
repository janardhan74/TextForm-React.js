import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById("root")).render(
// //<BrowserRouter>

// <App />,
// document.getElementById('root')
// //</BrowserRouter>
// );

import {
  BrowserRouter,
} from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

// ReactDOM.render(
//   //<BrowserRouter>

//   <App />,
//   document.getElementById('root')
//   //</BrowserRouter>
// );
