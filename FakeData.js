const  UserList = [
    {
        id: 1,
        name: "Sumukh",
        username: "jbsumukh",
        age: 23,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: 'Suresh',
                username: 'suresh002',
                age: 21,
                nationality: 'INDIA',
            },
        ],
    },
    {
        id: 2,
        name: 'Suresh',
        username: 'suresh002',
        age: 21,
        nationality: 'INDIA',
        friends: [
            {
                id: 1,
                name: "Sumukh",
                username: "jbsumukh",
                age: 23,
                nationality: "INDIA",
            },
        ],
    },
    {
        id: 3,
        name: 'Nathan',
        username: 'Nathan2020',
        age: 23,
        nationality: 'US',
    },
    {
        id: 4,
        name: 'Timmy',
        username: 'Timmy4Real',
        age: 20,
        nationality: 'ENGLAND',
    },
    {
        id: 5,
        name: 'Nakamura',
        username: 'Nakanon',
        age: 23,
        nationality: 'JAPAN',
    },
    {
        id: 6,
        name: 'Lin Ping',
        username: 'LinGod',
        age: 20,
        nationality: 'CHINA',
    }
]


const MovieList = [
    {
        id: 1,
        name: 'Titanic',
        releaseYear: 1997,
        currentlyAiring: false,
        language: 'ENGLISH'
    },
    {
        id: 2,
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        currentlyAiring: false,
        language: 'ENGLISH'
    },
    {
        id: 3,
        name: 'John Wick: Chapter 4',
        releaseYear: 2023,
        currentlyAiring: true,
        language: 'ENGLISH'
    },
    {
        id: 4,
        name: 'Shazam! Fury of the Gods',
        releaseYear: 2023,
        currentlyAiring: true,
        language: 'ENGLISH'
    },
    {
        id: 5,
        name: 'Your Name',
        releaseYear: 2016,
        currentlyAiring: false,
        language: 'JAPANESE'
    },
    {
        id: 6,
        name: 'Tu Jhoothi Main Makkaar',
        releaseYear: 2023,
        currentlyAiring: true,
        language: 'HINDI'
    }
]

const FavoriteMoviesList = [
    {
        userId: 1,
        favoriteMoviesID: [1,5]
    },
    {
        userId: 2,
        favoriteMoviesID: [2,6]
    },
    {
        userId: 3,
        favoriteMoviesID: [3]
    },
    {
        userId: 4,
        favoriteMoviesID: [4]
    },
    {
        userId: 5,
        favoriteMoviesID: [1,2,3]
    },
    {
        userId: 6,
        favoriteMoviesID: [1,2,5]
    }
]


module.exports = { UserList, MovieList, FavoriteMoviesList };