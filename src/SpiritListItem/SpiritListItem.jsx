import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CocktailImage from "../CocktailImage/CocktailImage.jsx";
import Button from "../Button/Button.jsx";

import styles from "./SpiritListItem.module.css";

const SpiritListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <CocktailImage
            url={props.recipe.image._url}
            title={props.recipe.title}
          />
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={`/${props.recipe.type}/${props.recipe.slug}`}
            >
              {props.recipe.title}
            </Link>
          </h2>
        </header>
        <div className={styles.wrapper}>
          {isTextShowing && (
            <div>
              <p className={styles.text}>{props.recipe.shortText}</p>
              <time className={styles.time} dateTime={props.recipe.timeStamp}>
                {props.recipe.pubDate}
              </time>
            </div>
          )}
        </div>
        <Button
          buttonText={isTextShowing ? "Hint Off" : "Sip Hint"}
          onClick={onClick}
        />
      </article>
    </li>
  );
};

SpiritListItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default SpiritListItem;
