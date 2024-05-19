import React, { useState } from "react";
import "./App.css";
import TextForm from "./components/Textform";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    navbar: {
      backgroundColor: "dark",
      color: "white",
    },
    textform: {
      backgroundColor: "black",
      color: "white",
    },
    contents: {
      backgroundColor: "#c6c5c9",
      color: "black",
    },
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    console.log("mode");
    console.log(mode);
    if (mode.navbar.backgroundColor === "dark") {
      setMode({
        navbar: {
          backgroundColor: "light",
          color: "black",
        },
        textform: {
          backgroundColor: "white",
          color: "black",
        },
        contents: {
          backgroundColor: "white",
          color: "black",
        },
      });

      showAlert("light mode enabled", "success");
      document.title = "TextUtils-Light Mode";

      // setInterval(()=>{
      //   document.title = "TextUtils-Light Mode";
      // },2000);

      // setInterval(()=>{
      //   document.title = "Install TextUtils";
      // },1500);
    } else {
      setMode({
        navbar: {
          backgroundColor: "dark",
          color: "white",
        },
        textform: {
          // backgroundColor :  "#0c091c" ,
          backgroundColor: "black",
          color: "white",
        },
        contents: {
          backgroundColor: "#c6c5c9",
          color: "black",
        },
      });
      showAlert("dark mode enabled", "success");

      document.title = "TextUtils-Dark Mode";
    }
  };
  const findContentColor = (color) => {
    if (color === "#2e0101") {
      return "#eb5e6a";
    } else if (color === "#080430") {
      return "#635eeb";
    } else if (color === "#031f02") {
      return "#4fe04a";
    } else {
      return "white";
    }
  };
  const changeColorPlatte = (color) => {
    setMode({
      navbar: mode.navbar,
      textform: {
        backgroundColor: color,
        color: mode.textform.color,
      },
      contents: {
        backgroundColor: findContentColor(color),
        color: mode.textform.color,
      },
    });
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar
          title={"TextUtils"}
          mode={mode}
          toggleMode={toggleMode}
          changeColorPlatte={changeColorPlatte}
        />
        <Alert alert={alert}></Alert>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <TextForm
                title={"Enter your Name"}
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </div>
      {/* <div className="container">
        <TextForm title={"Enter your Name"} mode={mode} showAlert={showAlert} />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
