import React from 'react'
import { Link } from "react-router-dom";

import bourbon from "../images/bourbon.jpeg";
import rum from "../images/rum.jpeg";
import vodka from "../images/vodka.jpeg";
import scotch from "../images/scotch.jpeg";

import styles from "./Home.module.css";


const Home = () => {
    return (
        <div>
            <div className = {styles.splitleft}>
                <img className = {styles.leftimg} src={bourbon} alt="bourbon" />
                <h1 className = {styles.lefttext}><Link to="/bourbon" className = {styles.a} >Bourbon Classic</Link></h1>
            </div>
            <div className = {styles.splitright} >
                <img className = {styles.righttopimg} src={rum} alt="rum" />
                <h1 className = {styles.righttoptext}><Link to="/rum" className = {styles.aR} >rum</Link></h1>
                <img className = {styles.rightmidimg} src={scotch} alt="scotch" />
                <h1 className = {styles.rightmidtext}><Link to="/scotch" className = {styles.aS} >scotch</Link></h1>
                <img className = {styles.rightbottonimg} src={vodka} alt="vodka" />
                <h1 className = {styles.rightbottontext}><Link to="/vodka" className = {styles.aV} >vodka</Link></h1>
            </div>
        </div>








    )
}

export default Home
