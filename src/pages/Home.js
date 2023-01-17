import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.

//import 'bootstrap/dist/css/bootstrap.css';

//import picture
import red from '../images/red-square.png';

//import style sheet
import "../styles/home.css";

const Home = () => {
return (
  <>
    <div>
      <img
        src={red}
        className="rounded mx-auto d-block"
        alt="red logo"
        width="150"
        height="150"
        id="img"
      />
      <h1 className="title">ADP Systems</h1>
      <br />
    </div>

    <div className="menu">
      <div className="btn-group dropend-center">
        <button type="button" className="btn btn-secondary">
          SELECT
        </button>
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden"> </span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/Auditor">
              Auditor
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/Employee">
              Employee
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/Reviewer">
              Reviewer
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);
};

export default Home;
