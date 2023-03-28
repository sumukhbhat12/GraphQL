const { UserList, MovieList, FavoriteMoviesList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {

        //User Resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        //Movie Resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const movie = _.find(MovieList, { name: args.name });
            return movie;
        }
    },

    User: {
        favoriteMovies: () => {
            //Not a proper query since this just assumes everyone's favourite movies are those released before 2000
            return _.filter(MovieList, (movie) => {
                return movie.releaseYear <= 2000;
            })
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            // const id = args.input.id;
            // const newUsername = args.input.newUsername;
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if(user.id === Number(id)){
                    user.username = newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated;
        },

        deleteUser: (parent, args) => {
            const id = args.input.id;
            let deletedUser;
            _.remove(UserList, (user) => {
                if(user.id === Number(id)){
                    deletedUser = user;
                    return true;
                }
            });
            return deletedUser;
        }
    }
}

module.exports = { resolvers };