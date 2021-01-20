import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";
function notFound() {
  return (
    <div>
      <img
        src="https://freefrontend.com/assets/img/html-funny-404-pages/Pure-CSS-404-Error-Page.png"
        alt=""
        className={styles["image"]}
      ></img>
      <Link to="/">
        <button className={styles["btn"]}>Go back to Home</button>
      </Link>
    </div>
  );
}

export default notFound;
