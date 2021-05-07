import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import Pagination from "@material-ui/lab/Pagination";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const ALL_GENDER = "All";

const useStyles = makeStyles({
  root: {
     display: "flex",
     flexDirection: "column",
     justifyContent: "center", 
     alignItems: "center",
     padding: 25,
  }
})



function MovieReviews() {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENDER);
  const {shows, searchedShows} = useSelector((state) => state.show);

  const showPerPage = 8;

  useEffect(()=>{
    dispatch(getShows(1));
  }, [dispatch])

  useEffect(() => {
    if (shows) {
      const genresSet = new Set(shows.flatMap((show) => show.genres));
      setGenres([...genresSet.values()]);
      setCount(Math.ceil(shows.length / showPerPage));
    }
  }, [dispatch, shows]);



  useEffect(() => {
    if (shows) {
      if(selectedGenre === ALL_GENDER) {
        const filteredShows = shows.map((show) => (show));
        console.log("ALL1");
        console.log(filteredShows);
        setCount(Math.ceil(shows.length / showPerPage));
      }
      if(selectedGenre !== ALL_GENDER) {
        const filteredShows = shows.filter((show) =>show.genres.includes(selectedGenre));
        console.log("NOALL");
        console.log(filteredShows);
        setCount(Math.ceil(filteredShows.length / showPerPage));
      dispatch(setSearchedShows(filteredShows));
      } else {
        dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, genres, selectedGenre, shows]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showPerPage);
  };

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Select value={selectedGenre}  onChange={handleSelectChange}>
        <MenuItem value="All">All</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
      <ShowsGallery shows = {searchedShows} isReviewsPage showsPerPage={showPerPage} from={from} />
      <Pagination
        count={count}
        variant="outlined"
        onChange={handleChange}
        shape="rounded"
        color="secondary"
      />
    </div>
  );
}

export default MovieReviews;