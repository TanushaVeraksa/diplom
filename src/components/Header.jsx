import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import background from "../../src/images/logo.png";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-around",
    alignItems: "center,",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  resetPadding: {
    "& .makeStyles-nav-2": {
      padding: 0,
    },
  },
  link: {
    textDecoration: "none",
  },
  changeColor : {
      color: "gray", 
      "&:hover": {
        color: "orange",
      }
  },
  image: {
    transition: ".3s ease all",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
});



function Header(props) {
  const { routes } = props;
  const classes = useStyles();

  return (
    <Grid
      style={{ width: "75%" }}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={2}>
        <div className={classes.logo}>
          <Link to={"/"}>
            <img
              className={classes.image}
              style={{ width: "50%", alignSelf: "flex-end" }}
              src={background}
              alt=""
            />
          </Link>
        </div>
      </Grid>
      <Grid item xs={5}>
        <div className={classes.nav}>
          {routes.map((elem) => (
                     <Card style={{ padding: 5, paddingLeft: 10, paddingRight: 10 }}>
              <Link className={classes.link} to={elem.path} key={elem.name}>
              <Typography className={classes.changeColor} variant="subtitle2"  color="textSecondary">
                {elem.name}
                </Typography>
              </Link>
            </Card>
          ))}
          
        </div>
      </Grid>
    </Grid>
  );
}

Header.protoTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })
  ),
};

export default Header;
