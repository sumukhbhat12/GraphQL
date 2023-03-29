import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DELETE_USER_MUTATION = gql`
    mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input){
            id
            name
        }
    }
`

const GET_USERS_QUERY = gql`
    query GetUsers {
        users {
            id
            name
        }
    }
`

export const DeleteUser = () => {

    const [ userId, setUserId ] = useState('');
    const navigate = useNavigate();

    const [deleteUser] = useMutation(DELETE_USER_MUTATION);
    const { data: responseUsers, error: responseError } = useQuery(GET_USERS_QUERY);

    return(
        <div>
            <h1>Delete A User</h1>
            <input onChange={(event) => { setUserId(event.target.value)}} type='text' placeholder="Enter the ID of the User" />
            <button onClick={() => {deleteUser({
                variables: {
                    input: {
                        id: userId,
                    },
                },
            }); navigate('/users')}}>Delete User</button>
            <div>
                {
                    responseUsers &&
                    responseUsers.users.map((user) => {
                        return <div style={{ }} key={user.id}>
                            <h3>{user.id}. {user.name}</h3>
                        </div>
                    })
                    
                }
                {
                    responseError &&
                    <h1>Error in Fetching Users data</h1>
                }
            </div>
        </div>
    )
}