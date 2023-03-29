import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const QUERY_MOVIE = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
            releaseYear
            language
        }
    }
`

export const Movie = () => {
    const [movieName, setMovieName] = useState('');
    const [getMovie,{data: responseMovie, error: responseError}] = useLazyQuery(QUERY_MOVIE);

    if(responseError){
        console.log(responseError);
    }


    return(
        <div>
            <input onChange={ (event) => setMovieName(event.target.value)} style={{marginTop:'10px'}} type='text' placeholder="Enter Movie Name" />
            <button onClick={ () => {getMovie({
                variables: {
                    name: movieName,
                },
            }); }}>Get Data</button>
            {
            responseMovie &&
            <div>
                <h3>Name: {responseMovie.movie.name}</h3>
                <h3>Year: {responseMovie.movie.releaseYear}</h3>
                <h3>Language: {responseMovie.movie.language}</h3>
            </div>
            }
            {
                responseError &&
                <h3>Error! Couldn't Retrieve the Data.</h3>
            }
        </div>
    )
}