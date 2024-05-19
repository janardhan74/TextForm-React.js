import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode.navbar.backgroundColor} bg-${props.mode.navbar.backgroundColor}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
              </ul>
            {/* </BrowserRouter> */}
            {/* <form className="d-flex">
			  <input
				className="form-control me-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
			  />
			  <button className="btn btn-outline-success" type="submit">
				Search
			  </button>
			</form> */}
            <div className="mx-3 my-2">
              <button
                style={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
                className="btn btn-sm mx-1"
                onClick={() => {
                  props.changeColorPlatte(
                    props.mode.navbar.backgroundColor === "dark"
                      ? "#2e0101"
                      : "#fa6161"
                  );
                }}
              ></button>

              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
                className="btn btn-sm mx-1"
                onClick={() => {
                  console.log("Blue clicked");
                  props.changeColorPlatte(
                    props.mode.navbar.backgroundColor === "dark"
                      ? "#080430"
                      : "#758cfa"
                  );
                }}
              ></button>

              <button
                style={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
                className="btn btn-sm mx-1"
                onClick={() => {
                  props.changeColorPlatte(
                    props.mode.navbar.backgroundColor === "dark"
                      ? "#031f02"
                      : "#64fa61"
                  );
                }}
              ></button>
            </div>

            <div className="form-check form-switch">
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                style={{ color: `${props.mode.navbar.color}` }}
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {/* console.log(`color:${props.mode.text}`) */}
                {`Enable ${
                  props.mode.navbar.backgroundColor === "dark" ? "light" : "dark"
                } Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
