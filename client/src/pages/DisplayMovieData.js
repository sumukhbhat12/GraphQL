import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            name
            releaseYear
            language
        }
    }
`

export const DisplayMovieData = () => {

    const {data: responseMovies, loading: loadingMovies, error: errorMovies } = useQuery(QUERY_ALL_MOVIES);

    
    if(loadingMovies){
        return <h3>Loading...</h3>
    }

    if(errorMovies){
        console.log(errorMovies);
    }


    return(
        <div>
            <h1>List of Movies</h1>
            {
                responseMovies && responseMovies.movies.map((movie) => {
                    return <div style={{marginBottom:'50px'}}>
                        <h3>Name: {movie.name}</h3>
                        <h3>Year: {movie.releaseYear}</h3>
                        <h3>Language: {movie.language}</h3>
                    </div>
                })
            }
        </div>
    )
}