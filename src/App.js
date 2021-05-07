import React from "react";
import {Route, Switch} from "react-router-dom";
import {Paper} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import background from "./images/background.jpg";

import {Home, About, Contacts, MovieReviews, JoinUs, Show} from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);


const useStyles = makeStyles({
  root:{
    backgroundImage: `url(${background})`,
    height: "100vh"
  },
})

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/about", name: About.name, component: About},
  {path: "/contacts", name: Contacts.name, component: Contacts},
  {path: "/join-us", name: JoinUs.name, component: JoinUs},
  {path: "/movie-reviews", name: MovieReviews.name, component: MovieReviews},
  ];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Header routes={routes}></Header>
    <div style = {{display: "flex", justifyContent: "center", alignItems:"center"}}>
        <Paper style = {{width: "80%"}}>
          <Switch>
            {routes.map((elem) => (
              <Route 
              path={elem.path} 
              exact component = {elem.component} 
              key={elem.name}/>
            ))}
            <Route path = {"/shows/:id"} exact component = {Show}></Route>
            <Route >404 not found</Route>
          </Switch>
      </Paper>
      </div>
      <Footer></Footer>
  </div>
  );
}

export default App;
