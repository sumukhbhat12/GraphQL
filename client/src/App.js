import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DisplayData } from './pages/DisplayData';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { DisplayUserData } from './pages/DisplayUserData';
import { DisplayMovieData } from './pages/DisplayMovieData';
import { User } from './pages/User';

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

        <Routes>
          <Route path='/' element={ <DisplayData /> } />
          <Route path='/users' element={ <DisplayUserData /> } />
          <Route path='/movies' element={ <DisplayMovieData /> } />
          <Route path='/user' element={ <User /> } />
          <Route path='*' element={<h3>Error 404: Page Not Found!</h3>} />
        </Routes>
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
