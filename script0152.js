"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

//console.log(numberOfFilms);
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}
console.log(personalMovieDB.movies);
// if (personalMovieDB.movies < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.movies >= 10 && personalMovieDB.movies < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.movies >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
