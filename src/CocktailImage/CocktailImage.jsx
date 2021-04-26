import React from "react";
import PropTypes from "prop-types";

import styles from "./CocktailImage.module.css";

const CocktailImage = (props) => {
  return <img className={styles.image} alt={props.title} src={props.url} />;
};

CocktailImage.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default CocktailImage;
