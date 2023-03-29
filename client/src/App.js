import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DisplayData } from './pages/DisplayData';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { DisplayUserData } from './pages/User/DisplayUserData';
import { DisplayMovieData } from './pages/Movie/DisplayMovieData';
import { User } from './pages/User/User';
import { Movie } from './pages/Movie/Movie';
import { CreateUser } from './pages/User/CreateUser';
import { DeleteUser } from './pages/User/DeleteUser';
import { CreateMovie } from './pages/Movie/CreateMovie';
import { DeleteMovie } from './pages/Movie/DeleteMovie';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  });



  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Router>
        <Link style={{margin:'10px'}} to='/users' >All Users</Link>
        <Link style={{margin:'10px'}} to='/movies'>All Movies</Link>
        <Link style={{margin:'10px'}} to='/user'>User by Id</Link>
        <Link style={{margin:'10px'}} to='/movie'>Movie by Name</Link>
        <Link style={{margin:'10px'}} to='/createuser'>Create a User</Link>
        <Link style={{margin:'10px'}} to='/deleteuser'>Delete a User</Link>
        <Link style={{margin:'10px'}} to='/createmovie'>Create a Movie</Link>
        <Link style={{margin:'10px'}} to='/deletemovie'>Delete a Movie</Link>


        <Routes>
          <Route path='/' element={ <DisplayData /> } />
          <Route path='/users' element={ <DisplayUserData /> } />
          <Route path='/movies' element={ <DisplayMovieData /> } />
          <Route path='/user' element={ <User /> } />
          <Route path='/movie' element={ <Movie /> } />
          <Route path='/createuser' element={ <CreateUser /> } />
          <Route path='/deleteuser' element={ <DeleteUser /> } />
          <Route path='/createmovie' element={ <CreateMovie /> } />
          <Route path='/deletemovie' element={ <DeleteMovie /> } />
          <Route path='*' element={<h3>Error 404: Page Not Found!</h3>} />
          
        </Routes>
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
