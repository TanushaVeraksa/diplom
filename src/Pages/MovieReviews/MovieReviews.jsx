import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import Pagination from "@material-ui/lab/Pagination";
import { Select, MenuItem } from "@material-ui/core";

const ALL_GENDER = "All";
const ALL_YEARS = "All";


function MovieReviews() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENDER);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS);
  const {shows, searchedShows} = useSelector((state) => state.show);

  const showPerPage = 8;

  useEffect(()=>{
    dispatch(getShows(1));
  }, [dispatch])

  useEffect(() => {
    if (shows) {
      const genresSet = new Set(shows.flatMap(show => show.genres));
      const yearsSet = new Set(shows.map(show => new Date(show.premiered).getFullYear() + ""));
      setYears([...yearsSet.values()]);
      setGenres([...genresSet.values()]);
      setCount(Math.ceil(shows.length / showPerPage));
    }
  }, [shows]);


  useEffect(() => {
    if (searchedShows) {
      if(selectedYear !== ALL_YEARS) {
        if(selectedGenre !== ALL_GENDER) {
          const filteredShows = shows.filter(show => show.premiered ? show.premiered.includes(selectedYear) : false);
           dispatch(setSearchedShows(filteredShows));
        } else {
          const filteredShows = searchedShows.filter(show => show.premiered ? show.premiered.includes(selectedYear) : false);
          if(JSON.stringify(searchedShows) !== JSON.stringify(filteredShows)) {
           dispatch(setSearchedShows(filteredShows));
        }
        }
      }
      if(selectedGenre !== ALL_GENDER) {
        const filteredShows = shows.filter((show) =>show.genres.includes(selectedGenre));
        if(JSON.stringify(searchedShows) !== JSON.stringify(filteredShows)) {
           dispatch(setSearchedShows(filteredShows));
        }
        
      } else {
        //  dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, genres, selectedGenre, searchedShows, selectedYear, shows]);

  useEffect(() => {
    if(shows) {
      dispatch(setSearchedShows(shows));
    }
  }, [dispatch, shows])

  const handleChange = (event, page) => {
    setFrom((page - 1) * showPerPage);
  };

  const handleSelectGenre = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
  }

  return (
    <div>
      <Select value={selectedGenre}  onChange={handleSelectGenre}>
        <MenuItem value="All">All</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>

      <Select value={selectedYear}  onChange={handleSelectYear}>
        <MenuItem value="All">All</MenuItem>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
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
