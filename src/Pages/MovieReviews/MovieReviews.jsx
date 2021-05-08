import React, { useEffect, useState } from "react";
import { getShows, setSearchedShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import Pagination from "@material-ui/lab/Pagination";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const ALL_GENDER = "All_GENDER";
const ALL_YEARS = "All_YEARS";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  selectStyle: {
    display:"flex",
    width: "25%",
    justifyContent:"space-around",
    alignSelf: "flex-start",
    marginBottom: 30,
    marginLeft: 20,
  },
  input: {
    borderRadius: 5,
    position: 'relative',
    border: '2px solid #ced4da',
    fontSize: 15,
    padding: 4,
  }
});

function MovieReviews() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENDER);
  const [selectedYear, setSelectedYear] = useState(ALL_YEARS);
  const { shows, searchedShows } = useSelector((state) => state.show);

  const showPerPage = 8;

  useEffect(() => {
    dispatch(getShows(1));
  }, [dispatch]);

  useEffect(() => {
    if (shows) {
      const genresSet = new Set(shows.flatMap((show) => show.genres));
      const yearsSet = new Set(
        shows.map((show) => new Date(show.premiered).getFullYear() + "")
      );
      setYears([...yearsSet.values()]);
      setGenres([...genresSet.values()]);
      setCount(Math.ceil(shows.length / showPerPage));
    }
  }, [dispatch, shows]);

  useEffect(() => {
    if (shows) {
      if (selectedGenre === ALL_GENDER && selectedYear === ALL_YEARS) {
        const filteredAllShows = shows.map((show) => show);
        setCount(Math.ceil(shows.length / showPerPage));
        dispatch(setSearchedShows(filteredAllShows));
      } else if (selectedYear !== ALL_YEARS && selectedGenre === ALL_GENDER) {
        const filteredShowsYear = shows.filter((show) =>
          show.premiered ? show.premiered.includes(selectedYear) : false
        );
        setCount(Math.ceil(filteredShowsYear.length / showPerPage));
        dispatch(setSearchedShows(filteredShowsYear));
      } else if (selectedGenre !== ALL_GENDER && selectedYear === ALL_YEARS) {
        const filteredShowsGender = shows.filter((show) =>
          show.genres.includes(selectedGenre)
        );
        setCount(Math.ceil(filteredShowsGender.length / showPerPage));
        dispatch(setSearchedShows(filteredShowsGender));
      } else if (selectedGenre !== ALL_GENDER && selectedYear !== ALL_YEARS) {
        const filteredShowsYear = shows.filter((show) =>
          show.premiered ? show.premiered.includes(selectedYear) : false
        );

        const filteredShowsGender = shows.filter((show) =>
          show.genres.includes(selectedGenre)
        );
        let newArray = filteredShowsYear.concat(filteredShowsGender);
        let filtered = newArray.filter((show) =>
          show.premiered.includes(selectedYear) &&
          show.genres.includes(selectedGenre)
            ? show
            : false
        );
        let filterSet = new Set(filtered);
        let array = [...filterSet];
        setCount(Math.ceil(array.length / showPerPage));
        dispatch(setSearchedShows(array));
      } else {
        dispatch(setSearchedShows(shows));
      }
    }
  }, [dispatch, genres, selectedGenre, shows, selectedYear]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showPerPage);
  };

  const handleSelectChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className = {classes.selectStyle}>
      <Select value={selectedGenre} onChange={handleSelectChange}  >
        <MenuItem value="All_GENDER">Gender</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </Select>
      <Select value={selectedYear} onChange={handleSelectYear}   >
        <MenuItem value="All_YEARS">Year</MenuItem>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      </div>
      <ShowsGallery
        shows={searchedShows}
        isReviewsPage
        showsPerPage={showPerPage}
        from={from}
      />
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
