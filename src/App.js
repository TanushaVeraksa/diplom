import React , {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Paper } from "@material-ui/core";
import {useSelector, useDispatch } from "react-redux";
import {auth} from "./actions/user";
import { makeStyles } from "@material-ui/core";
import background from "./images/background.jpg";
import ShowComments from "./components/ShowComments"

import {
  Home,
  About,
  MovieReviews,
  Show,
  PersonalArea,
  ErrorAuth,
  Authorization
} from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";


library.add(fab, faCheckSquare, faCoffee);

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${background})`,
    height: "100%",
  },
  containerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/movie-reviews", name: "Movie Reviews", component: MovieReviews },
  { path: "/personal-area", name: "Personal Area", component: PersonalArea },
  { path: "/authorization", name: "Authorization", component: Authorization },
];

function App() {
  const classes = useStyles();
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch  = useDispatch()

  useEffect(() => {
    dispatch(auth())
}, [])

  return (
    <div className={classes.root}>
      <div className={classes.containerRoot}>
        <Header routes={routes}></Header>        
      </div>
      <div className={classes.containerRoot}>
        <Paper style={{ width: "73%" }}> 
        <Switch>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/about"} exact component={About}></Route>
            <Route path={"/movie-reviews"} exact component={MovieReviews}></Route>
            <Route path={"/authorization"} exact component={Authorization}></Route>
            {isAuth ? 
            <Route path={"/personal-area"} exact component={PersonalArea}></Route>
            :
            <Route path={"/personal-area"} exact component={ErrorAuth}></Route>
            }

            <Route path={"/shows/:id"} exact component={Show}></Route>
             
            
            <Route>404 not found</Route>
          </Switch>  
        </Paper>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
