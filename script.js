"use strict";
let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};
for (let i = 0; i < 2; i++) {
    const a = prompt("Один з останніх переглянутих фільмів?");
    const b = prompt("На скільки оціните фільм?");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error')
        i--;
    }
};
if (personalMovieDB < 10) {
    console.log("Переглянуто доволі мало фільмів")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач")
} else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман")
} else {
    console.log("Помилка")
}