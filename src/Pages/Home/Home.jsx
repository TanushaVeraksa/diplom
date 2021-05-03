import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getShows } from "../../actions/shows";
import {getPremieres} from "../../actions/premieres";
import ShowsGallery from "../../components/ShowsGallery";
import { makeStyles } from "@material-ui/styles";
import Premieres from "./components/Premieres";

const useStyles = makeStyles({
   root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", 
   }
})



function Home(props) {
const classes = useStyles()
useEffect(() => {
   props.getShows(1);
   props.getPremieres();
}, [props]);


   return <div className={classes.root}>
      <ShowsGallery/> 
      <Premieres/>
   </div>
}

const mapStateToProps = (state) => ({}) 

const mapDispatchToProps = (dispatch) => ({
   getShows: (page) => dispatch(getShows(page)),
   getPremieres: () => dispatch(getPremieres()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);


