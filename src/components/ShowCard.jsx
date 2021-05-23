import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";

let arr = []
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
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
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
  const isAuth = useSelector(state => state.user.isAuth)
  const isAuth1 = useSelector(state => state.user.currentUser)
  const [theme, setTheme] = useState('default');
  
const clickArr = (id) => {
  arr.push(id);
  console.log(arr)
  console.log(isAuth)
  console.log(isAuth1)
}

  return (

    <>
      <div className={classes.container}>
        <Link to={`/shows/${id}`}>
          <img
            src={src}
            alt={alt ? alt : "no-alt"}
            className={classes.image}
            style={{ width: "100%", marginTop: 20 }}
          />
        </Link>
        <div>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            {genres}
          </Typography>

          <Typography variant="subtitle1" align="center" color="textSecondary">
            {premiered}
          </Typography>

          <Typography variant="subtitle1" align="center" color="textSecondary">
            {country}
          </Typography>

          <Typography variant="subtitle1" align="center" color="textSecondary">
            {language}
          </Typography>

          <Typography variant="subtitle1" align="center" color="textSecondary">
            {runtime}
          </Typography>

          <Typography variant="subtitle1" align="center" color="textSecondary">
            {rating}
          </Typography>
        </div>
      </div>
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        color="textSecondary"
      >
        {title}
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "white",
            fontSize: 20,
            color: "red",
          }}
          onClick={() => {clickArr(id)}}
        >
          &#10084;
        </button>
      </Typography>

      <Typography  align="center" style={{padding: 10}}>{description}</Typography>
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
