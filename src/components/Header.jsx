import React from 'react';
import PropTypes from 'prop-types';
import {Grid, AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    nav: {
        flexDirection: "row",
        padding: 50,
    },
    resetPadding: {
        "& .makeStyles-nav-2": {
            padding: 0,
        }
    }
})

function Header(props) {
    const {routes} = props;
    const classes = useStyles();

    return <Grid container justify="space-between">
        <Grid item xs={2}>
            Logo
        </Grid>
        <Grid item xs={6} className = {classes.resetPadding}>
            <AppBar position="static" className = {classes.nav}>
                    {routes.map((elem) => (
                    <Link to={elem.path} key={elem.name}>{elem.name}</Link>
                    ))}
             </AppBar>
        </Grid>
    </Grid>;
}

Header.protoTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })
  ),
}

export default Header