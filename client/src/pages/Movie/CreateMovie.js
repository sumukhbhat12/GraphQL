import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_MOVIE_MUTATION = gql`
    mutation CreateMovie($input: CreateMovieInput!) {
        createMovie(input: $input) {
            id
            name
            language
        }
    }
`

export const CreateMovie = () => {

    const [movieName, setMovieName] = useState('');
    const [movieYear, setMovieYear] = useState(0);
    const [movieLang, setMovieLang] = useState('');
    const [curAir, setMovieCurAir] = useState(false);
    const navigate = useNavigate();

    const [createMovie] = useMutation(CREATE_MOVIE_MUTATION);

    return(
        <div>
            <h1>Create a Movie</h1>
            <input style={{marginBottom:'10px'}} onChange={(event) => {setMovieName(event.target.value)}} type='text' placeholder="Enter the Movie Name" />
            <br />
            <input style={{marginBottom:'10px'}} onChange={(event) => {setMovieYear(Number(event.target.value))}} type='number' placeholder="Enter the Release Year" />
            <br />
            <input style={{marginBottom:'10px'}} onChange={(event) => {setMovieLang(event.target.value)}} list="language" placeholder="Select a Language" />
            <br />
            <datalist id="language">
                <option value='ENGLISH' />
                <option value='JAPANESE' />
                <option value='HINDI' />
            </datalist>
            <label style={{marginBottom:'20px'}} htmlFor='curAir' >Currently Airing?</label>
            <input style={{marginBottom:'20px'}} onChange={(event) => {setMovieCurAir(event.target.checked)}} id='curAir' type='checkbox' placeholder="Currently Airing?" />
            <br />
            <button onClick={ () => {createMovie({
                variables:{
                    input:{
                        name: movieName,
                        releaseYear: movieYear,
                        currentlyAiring: curAir,
                        language: movieLang
                    },
                },
            }); navigate('/movies')}}>Create Movie</button>
        </div>
    )
}