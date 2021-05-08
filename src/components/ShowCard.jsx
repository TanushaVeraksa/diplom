import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    showCard: ({size})=> {
       const styles ={
         width: 210,
         height: 295,
         marginBottom: 10,
         marginLeft: 18,
         marginTop: 5,
         overflow: "hidden",
       }
      if(size === "sm") {
         return styles
      }
      if(size === "lg") {
         styles.width = 825;
         styles.height = 491;
         return styles;
      }
    },
      image:({isReviewsPage}) => ({
         transition: isReviewsPage ? ".3s ease all" : "none",
         "&:hover": {
            transform: isReviewsPage ? "scale(1.1)" : "none",
       },
       borderRadius: 7,
    }),
    textStyle: {
      display: "flex",
    }
}))

function ShowCard(props) {
    const {size = "sm", src, alt, id, title, description, isReviewsPage, genres, premiered} = props;
    const classes = useStyles({size, isReviewsPage});
    return (
      <>
        <div className = {classes.showCard}>
            <Link to={`/shows/${id}`}>
                <img  src={src} alt={alt ? alt : "no-alt"} className = {classes.image} />
            </Link>
        </div>
        <Grid container  alignItems="center" justify="center">
        <Typography variant="h6" gutterBottom align="center" color="textSecondary">
          {title}
         </Typography>
         <p>{description}</p>
         <p>{genres}</p>
         <p>{premiered}</p>
         </Grid>
      </>
    )
}

ShowCard.prototype = {
    size: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    isReviewsPage: PropTypes.bool.isRequired,
    genres: PropTypes.object,
    premiered: PropTypes.string,
}

export default ShowCard
