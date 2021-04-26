import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import Form from "../Form/Form";

import styles from "./DynamicRecipe.module.css";
import CocktailImage from "../CocktailImage/CocktailImage";

const DynamicRecipe = (props) => {
    console.log("ahhhhh")
    console.log(props)
    // console.log(props.Recipe.title)

  return (
    <div>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{props.Recipe.title}</h1>
        </header>
        <div className={styles.container}>
        <CocktailImage 
            url={props.Recipe.image._url}
            title={props.Recipe.title}
          />
        <HTMLText text={props.Recipe.text} />
        </div>

      </article>
      <Form/> 

    </div>
  );
};

export default DynamicRecipe;
