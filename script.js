"use strict";
let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};
const a = prompt("Один з останніх переглянутих фільмів?"),
    b = prompt("На скільки оціните фільм?"),
    c = prompt("Один з останніх переглянутих фільмів?"),
    d = prompt("На скільки оціните фільм?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;