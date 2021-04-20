import React from 'react';
import { connect } from "react-redux";
import ShowCard from "../../../components/ShowCard";
import { Grid } from "@material-ui/core";


function ShowsGallery(props) {
   console.log(props.shows);
    return (
        <Grid container>
          {props.shows ? props.shows.map(show => 
			 	<Grid item lg = {3} md = {4} sm={6} xs={12}>
				 	<ShowCard src={show.image.medium} id = {show.id} />
			   </Grid>
			 ) : null}
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    shows: state.show.shows
})

export default connect(mapStateToProps)(ShowsGallery)
