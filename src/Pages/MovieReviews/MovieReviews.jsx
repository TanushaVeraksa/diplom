import React, { useEffect, useState } from "react";
import { getShows } from "../../actions/shows";
import { useDispatch, useSelector } from "react-redux";
import ShowsGallery from "../../components/ShowsGallery";
import Pagination from "@material-ui/lab/Pagination";

function MovieReviews() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(0);
  const [count, setCount] = useState(10);
  const shows = useSelector((state) => state.show.shows);

  const showPerPage = 8;

  useEffect(() => {
    dispatch(getShows(1));
    if (shows) {
      setCount(Math.ceil(shows.length / showPerPage));
    }
  }, [dispatch, shows]);

  const handleChange = (event, page) => {
    setFrom((page - 1) * showPerPage);
  };

  return (
    <div>
      <ShowsGallery isReviewsPage showsPerPage={showPerPage} from={from} />
      <Pagination
        count={count}
        variant="outlined"
        onChange={handleChange}
        shape="rounded"
      />
    </div>
  );
}

export default MovieReviews;
