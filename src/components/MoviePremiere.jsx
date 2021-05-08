import React from "react";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const OrangeTextTypography = withStyles({
  root: {
    color: "#e4b076",   
  }
})(Typography);

const getMonthName = (monthNumber) => {
  switch (monthNumber) {
    case 0:
      return "January";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "Desember";
    default:
      return "July";
  }
};

function MoviePremiere(props) {
  const { premiereMonth, description, movies } = props;

  return (
    <article>
      <Typography color="textSecondary" variant="h5" component="h5">
        {getMonthName(premiereMonth.getMonth())} premiere
      </Typography>
      <Typography color="textSecondary" component="p" >
        {description} premiere{" "}
      </Typography>
      {movies.map((movie) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Paper variant="outlined">
            <span style={{ margin: "3" }}>
              {" "}
              {movie.date.getDate()} / {movie.date.getMonth() + 1}{" "}
            </span>
          </Paper>
          <OrangeTextTypography  variant="subtitle2">
            {movie.description}
          </OrangeTextTypography>
        </div>
      ))}
    </article>
  );
}

export default MoviePremiere;
