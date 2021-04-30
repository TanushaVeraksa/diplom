import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    showCard: ({size})=> {
       const styles ={
         width: 255,
         height: 295,
         marginBottom: 10,
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
    }),
}))

function ShowCard(props) {
    const {size = "sm", src, alt, id, title, description, isReviewsPage} = props;
    const classes = useStyles({size, isReviewsPage});
    return (
      <>
        <div className = {classes.showCard}>
            <Link to={`/shows/${id}`}>
                <img src={src} alt={alt ? alt : "no-alt"} className = {classes.image}/>
            </Link>
        </div>
         <h3>{title}</h3>
         <p>{description}</p>
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
    isReviewsPage: PropTypes.bool.isRequired
}

export default ShowCard
