import React, { useState } from "react";

import styles from "./Form.module.css";


const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("DATA", data.get("foo"));
    setSubmittedForm(data);
  };

  return (
    <div >
      {
        submittedForm ? (
          <div className={styles.header}>Nice Choice! You want to pair with {submittedForm.get("FoodDropdown")} !
           <div className={styles.header1}>  {submittedForm.get("likelyDropdown")} </div>
          </div>
        ) : (
          <form  onSubmit={onSubmit}>
            <label className={styles.label} htmlFor="FoodId">Your Food Pairing </label>
            <select className={styles.frame}  name="FoodDropdown" id="FoodId">
              <option value="Roast Beef">Roast Beef</option>
              <option value="Slow Cooked Pork">Slow Cooked Pork</option>
              <option value="Lamb Shank">Lamb Shank</option>
              <option value="Roast Duck">Roast Duck</option>
              <option value="Cheese Platter">Cheese Platter</option>
              <option value="Desserts">Desserts</option>
            </select>
            <div> 
              <label className={styles.label} htmlFor="likelyId">  Will you try this recipe </label>
                <select className={styles.frame} name="likelyDropdown" id="likelyId">
                <option value="Great, You Love the Recipe!">Definitely</option>
                <option value="Give a shot!">Highly likely</option>
                <option value="Think about it --- You know you want to try it out!">Maybe</option>
                <option value="Oops... Maybe you will like other Recipes~">Not interested</option>

              </select>
            </div>
            <input className={styles.submit} type="submit" value="Send it" />
          </form>
        )
      }
    </div>
  )
}

export default Form
