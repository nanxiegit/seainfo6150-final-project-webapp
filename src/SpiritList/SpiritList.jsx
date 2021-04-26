import React from "react";
import PropTypes from "prop-types";
import SpiritListItem from "../SpiritListItem/SpiritListItem.jsx";

import styles from "./SpiritList.module.css";

const SpiritList = (props) => {
  let displayContent;

  if (props.Recipes.length) {
    displayContent = (
      <ul className={styles.container}>
        {props.Recipes.map((recipe) => (
          <SpiritListItem recipe={recipe} key={recipe.slug} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      <h2 className={styles.header}>
      {props.Recipes[0].type} 
      </h2>
      {displayContent}
    </div>
  );
};

SpiritList.propTypes = {
    Recipes: PropTypes.array.isRequired
}
export default SpiritList;