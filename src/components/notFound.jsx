import React from "react";
import { Link } from "react-router-dom";
import styles from "./notFound.module.css";
function notFound() {
  return (
    <div>
      <Link to="/">
        <button className={styles["btn"]}>Home</button>
      </Link>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/248/366/non_2x/error-404-unavailable-web-page-file-not-found-business-concept-vector.jpg"
        alt=""
        className={styles["image"]}
      ></img>
    </div>
  );
}

export default notFound;
