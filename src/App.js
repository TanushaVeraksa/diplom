import React from "react";
import {Route, Switch} from "react-router-dom";
import {Paper} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import background from "./images/background.jpg";

import {Home, About, Contacts, MovieReviews, JoinUs} from "./Pages";
import Header from "./components/Header";


const useStyles = makeStyles({
  root:{
    backgroundImage: `url(${background})`,
    height: "100vh"
  },
})

function App() {

  const classes = useStyles();

  const routes = [
    {path: "/", name: Home.name, component: Home},
    {path: "/about", name: About.name, component: About},
    {path: "/contacts", name: Contacts.name, component: Contacts},
    {path: "/join-us", name: JoinUs.name, component: JoinUs},
    {path: "/movie-reviews", name: MovieReviews.name, component: MovieReviews},
    ];

  return (
    <div className={classes.root}>
    <Header routes={routes}></Header>
        <Paper>
          <Switch>
            {routes.map((elem) => (
              <Route path={elem.path} exact component = {elem.component} key={elem.name}/>
            ))}
            <Route >404 not found</Route>
          </Switch>
      </Paper>
  </div>
  );
}

export default App;
