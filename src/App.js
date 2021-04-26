import { Switch, Route, Link,Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import Home from "./Home/Home.jsx";
import DynamicRecipe from "./DynamicRecipe/DynamicRecipe.jsx";
import SpiritList from "./SpiritList/SpiritList.jsx";
import Error from "./Error/Error.jsx";

import styles from "./App.module.css";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo2378798.mockable.io/recipes");
      
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
    
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div  className={styles.container}>
     <header className = {styles.header}>
        BACCHUS RECIPES 
      </header>

      <header>
        <nav>
            <ul className = {styles.nav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bourbon">Bourbon</Link></li>
              <li><Link to="/rum">Rum</Link></li>
              <li><Link to="/scotch">Scotch</Link></li>
              <li><Link to="/vodka">Vodka</Link></li>
            </ul>
        </nav>
        </header>
    
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/404" exact component={Error} />

        <Route
          path="/:slug"
          exact
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            if (fetchedData[match.params.slug]=== undefined){
              return <Redirect to="/404"/>
            }

            return fetchedData ? <SpiritList
            Recipes={Object.values(Object.values(fetchedData[match.params.slug])[1])}
          /> : null
          }}
        />
        <Route
          path="/:slug1/:slug"
          exact
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            if (fetchedData[match.params.slug1]=== undefined){
              return <Redirect to="/404" />
            }

            if (Object.values(fetchedData[match.params.slug1])[1][match.params.slug]=== undefined ){
              return <Redirect to="/404" />
            }
            return fetchedData ? <DynamicRecipe
            Recipe={Object.values(fetchedData[match.params.slug1])[1][match.params.slug]}
          /> : null
          }}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
