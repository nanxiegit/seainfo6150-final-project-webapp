import React from 'react'
import { Link } from "react-router-dom";
import cocktailimg from "../images/bourbon.jpeg";

import styles from "./Error.module.css";


const Error = () => {
    return (
  <div className={styles.container}>
      <img className = {styles.img} src={cocktailimg} alt="cocktailimg" />
      <div className={styles.centered}>
      <h1>404 - Tab not Found</h1>
      <h2>Already Tipsy?</h2>
      <h3>Let's go back <Link className={styles.link} to="/">HOME</Link></h3>
      </div>

      </div>
    )
}

export default Error
