import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import PlantBackground from "../pics/back1.png";
import { useContext } from "react";
import FbNavbar from "../FbNavbar";
/**
 * Home section of our website
 * @returns
 */
function Landing() {

  return (
    <>
    <FbNavbar />
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "white", marginTop: 10 }}>Welcome to not<span className="ed">Ed</span>.</h1>
        <p className="para">
          Explore, Learn and Create from our library of professional note library
        </p>
        
      </div>
    </>
  );
}

export default Landing;
