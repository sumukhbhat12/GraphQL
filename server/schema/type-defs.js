const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        releaseYear: Int!
        currentlyAiring: Boolean!
        language: Language!
    }

    #Return [User!]! if the query is successful
    type UsersSuccessfulResult {
        users: [User!]!
    }

    #Return a String if the query is unsuccessful
    type UsersErrorResult {
        message: String!
    }

    #Create 2 different types from both the successful and failure results and make a union of them as the Type of the Result
    union UsersResult = UsersSuccessfulResult | UsersErrorResult

    type Query {
        users: UsersResult
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = US
    }

    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }

    input DeleteUserInput {
        id:ID!
    }

    input CreateMovieInput {
        name: String!
        releaseYear: Int!
        currentlyAiring: Boolean!
        language: Language!
    }

    input DeleteMovieInput {
        id:ID!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(input: DeleteUserInput): User
        createMovie(input: CreateMovieInput!): Movie!
        deleteMovie(input: DeleteMovieInput!): Movie!
    }

    enum Nationality {
        INDIA
        US
        ENGLAND
        JAPAN
        CHINA
        AUSTRALIA
    }

    enum Language {
        ENGLISH
        JAPANESE
        HINDI
    }
    
`;

module.exports = { typeDefs }