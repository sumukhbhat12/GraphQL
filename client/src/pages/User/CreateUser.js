import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!){
        createUser(input: $input){
            name
            id
        }
    }
`

export const CreateUser = () => {

    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ age, setAge ] = useState(0);
    const [ nationality, setNationality ] = useState('');
    const navigate = useNavigate();

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    return(
        <div>
            <h1>Create A New User</h1>
            <input onChange={(event) => setName(event.target.value)} style={{marginBottom:'10px'}} type='text' placeholder="Enter The User's Name" />
            <br />
            <input onChange={(event) => setUsername(event.target.value)} style={{marginBottom:'10px'}} type='text' placeholder="Enter The User's username" />
            <br />
            <input onChange={(event) => setAge(Number(event.target.value))} style={{marginBottom:'10px'}} type='number' placeholder="Enter The User's Age" />
            <br />
            <input list="nationality" onChange={(event) => setNationality(event.target.value)} style={{marginBottom:'10px'}} placeholder="Enter The User's Nationality" />
            <datalist id="nationality">
                <option value='INDIA'/>
                <option value='US'/>
                <option value='ENGLAND'/>
                <option value='AUSTRALIA'/>
                <option value='JAPAN'/>
                <option value='CHINA'/>
            </datalist>
            <br />
            <button onClick={() => {createUser({
                variables: {
                    input: {
                        name: name,
                        username: username,
                        age: age,
                        nationality: nationality,
                    }
                },
            }); navigate('/users'); }}>Create User</button>
        </div>
    )
}