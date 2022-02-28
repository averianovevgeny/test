"use strict";
//1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//if(numberOfFilms>'')
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
if (numberOfFilms > "") {
  if (numberOfFilms < "50") {
    for (let i = 0; i <= personalMovieDB.count; i++) {
      personalMovieDB.movies[
        prompt("Один из последних просмотренных фильмов?", "")
      ] = prompt("На сколько оцените его?", "");
    }
  }
} else {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели,AAAAA?", "");
}
console.log(personalMovieDB.movies);

if (personalMovieDB.movies < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.movies > 10 && personalMovieDB.movies < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.movies > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
