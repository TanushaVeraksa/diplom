import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import Pagination from "@material-ui/lab/Pagination";
import { Select, MenuItem } from "@material-ui/core";

function MovieReviews() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const shows = useSelector((state) => state.show.shows);

  const showPerPage = 8;

  useEffect(() => {
    dispatch(getShows(1));
    if (shows) {
      const genresSet = new Set(shows.flatMap((show) => show.genres));
      setGenres([...genresSet.values()]);
      setCount(Math.ceil(shows.length / showPerPage));
    }
  }, [dispatch, shows]);

  useEffect(() => {
    if (!selectedGenre) {
      setSelectedGenre(genres[0]);
    }
    if (shows) {
      const filteredShows = shows.filter((show) =>
        show.genres.includes(selectedGenre)
      );
      dispatch(setSearchedShows(filteredShows));
    }
  }, [genres, selectedGenre, shows]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showPerPage);
  };

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <Select value={selectedGenre} displayEmpty onChange={handleSelectChange}>
        <MenuItem value="All">All</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
      <ShowsGallery isReviewsPage showsPerPage={showPerPage} from={from} />
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
