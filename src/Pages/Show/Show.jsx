import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getShow } from "../../actions/shows.js";
import ShowCard from "../../components/ShowCard";
import ShowComments from "../../components/ShowComments";
import {useSelector } from "react-redux";

function Show(props) {
  useEffect(() => {
    props.getShow(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <div>
      
      {props.show && (
        <ShowCard
          src={props.show.image ? props.show.image.medium : ""}
          id={props.show.id}
          title={props.show.name}
          description={props.show.summary.replace(/<[^>]+>/g, "")}
          genres={props.show.genres + " "}
          language={props.show.language}
          runtime={props.show.runtime ? props.show.runtime : ""}
          premiered={new Date(props.show.premiered).getFullYear() + ""}
          weight={props.show.weight + " "}
          country={props.show.webChannel ? props.show.webChannel.country.name : ""}
          rating={props.show.rating ? props.show.rating.average : ""}
        />
      )}
      {isAuth && 
        <ShowComments
          src={props.show.image ? props.show.image.medium : ""}
          id={props.show.id}
          title={props.show.name}
          description={props.show.summary.replace(/<[^>]+>/g, "")}
          genres={props.show.genres + " "}
          language={props.show.language}
          runtime={props.show.runtime ? props.show.runtime : ""}
          premiered={new Date(props.show.premiered).getFullYear() + ""}
          weight={props.show.weight + " "}
          country={props.show.webChannel ? props.show.webChannel.country.name : ""}
          rating={props.show.rating ? props.show.rating.average : ""}
        />
      }
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  show: state.show.currentShow,
});

const mapDispatchToProps = (dispatch) => ({
  getShow: (id) => dispatch(getShow(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show));
