import React from 'react';
import {Typografe} from "@material-ui/core";

function MoviePremiere(props) {
    const {premiereMonth, description, movies} = props;
    return (
        <article>
            <Typografe variant = "h2" component = "h2">
                {premiereMonth} premiere </Typografe>
            <Typografe component = "p">
                {description} premiere </Typografe>
            {movies.map(movie => 
            <div>
                <p>{movie.date}</p> <p>{movie.description}</p>
                </div>
            )}
        </article>
    )
}

export default MoviePremiere
