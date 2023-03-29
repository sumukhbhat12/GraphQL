import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DELETE_MOVIE_MUTATION = gql`
    mutation DeleteMovie($input: DeleteMovieInput!) {
        deleteMovie(input: $input) {
            id
            name
        }
    }
`;

const GET_MOVIES_QUERY = gql`
    query Movies {
        movies {
            id
            name
        }
    }
`;

export const DeleteMovie = () => {

    const [movieId, setMovieId] = useState('');
    const navigate = useNavigate();

    const [ deleteMovie ] = useMutation(DELETE_MOVIE_MUTATION);
    const { data: responseMovies, error: responseError } = useQuery(GET_MOVIES_QUERY);

    return (
        <div>
            <h1>Delete a Movie</h1>
            <input onChange={(event) => setMovieId(event.target.value)} type='text' placeholder="Enter the Id of the Movie to be Deleted" />
            <button onClick={ () => {deleteMovie({
                variables:{
                    input:{
                        id: movieId
                    },
                },
            }); navigate('/movies')} }>Delete Movie</button>
            <div>
                {
                    responseMovies &&
                    responseMovies.movies.map((movie) => {
                        return <div key={movie.id}>
                                    <h3>{movie.id}. {movie.name}</h3>
                                </div>
                    })
                }
            </div>
        </div>
    )
}