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

console.log(personalMovieDB);
//let key = prompt("Один из последних просмотренных фильмов?", "");
//let znachenie = prompt("На сколько оцените его?", "");
const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);
