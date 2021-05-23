import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  showCard: ({ size }) => {
    const styles = {
      width: 210,
      height: 295,
      marginBottom: 10,
      marginLeft: 18,
      marginTop: 5,
      overflow: "hidden",
    };
    if (size === "sm") {
      return styles;
    }
    if (size === "lg") {
      styles.width = 300;
      styles.height = 420;
      return styles;
    }
  },
  container:{
    display:"flex",
    justifyContent:"space-around",
    alignItems: "center"
  },
  image: ({ isReviewsPage }) => ({
    transition: isReviewsPage ? ".3s ease all" : "none",
    "&:hover": {
      transform: isReviewsPage ? "scale(1.05)" : "none",
    },
    borderRadius: 7,
    width: "100%",
  }),
  textStyle: {
    display: "flex",
  },
}));

function ShowCard(props) {
  const {
    size = "lg",
    src,
    alt,
    id,
    title,
    description,
    isReviewsPage,
    genres,
    premiered,
    language,
    country,
    rating,
    runtime,
  } = props;
  const classes = useStyles({ size, isReviewsPage });
  return (
    <>
     class
    </>
  );
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
  language: PropTypes.string,
  weight: PropTypes.string,
  country: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.number,
};

export default ShowCard;
