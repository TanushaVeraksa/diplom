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
      image: {
         transition:".3s ease all",
         "&:hover": {
            transform: "scale(1.1)",
       },
    },
}))

function ShowCard(props) {
    const {size = "sm", src, alt, id, title, description} = props;
    const classes = useStyles({size});
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
    description: PropTypes.string
}

export default ShowCard
