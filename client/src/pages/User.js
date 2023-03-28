import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const QUERY_USER = gql`
    query User($id: ID!){
        user(id: $id){
            name
            username
            age
        }
    }
`;


export const User = () => {

    const [userid, setUserid] = useState('');
    const [ getUser, {data: responseUser, error: responseError} ] = useLazyQuery(QUERY_USER);

    if(responseError){
        console.log(responseError);
    }

    return(
        <div>
            <input style={{marginTop:'10px'}} onChange={ (event) => setUserid(event.target.value)} type='text' placeholder="Enter the User Id" />
            <button onClick={ () => { getUser({variables: {
                id: userid,
            },}); } }>Get Data</button>
            <div>{
                responseUser
                &&
                <div key={responseUser.user.id}>
                    <h3>Name: {responseUser.user.name}</h3>
                    <h3>Username: {responseUser.user.username}</h3>
                    <h3>Age: {responseUser.user.age}</h3>
                </div>
            }
            </div>
        </div>
    )
}