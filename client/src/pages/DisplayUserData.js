import { useQuery,gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            username
            age
        }
    }
`;

export const DisplayUserData = () => {

    const { data: responseUsers, loading: loadingUsers , error: errorUsers } = useQuery(QUERY_ALL_USERS);

    if(loadingUsers){
        return <h3>Loading...</h3>
    }

    if(errorUsers){
        console.log(errorUsers);
    }

    return(
        <div>
            <h1>List of Users</h1>
            <>{
                responseUsers && responseUsers.users.map((user) => {
                    return <div style={{marginBottom:'50px'}} key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <h3>Username: {user.username}</h3>
                        <h3>Age: {user.age}</h3>
                    </div>
                })
            }</>
        </div>
    )
}