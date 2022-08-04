"use strict";

//clg - console.log() snippets

//task_1
let numberOfFilms = Number(prompt("How many films did you see?", ""));
console.log(numberOfFilms);

//task_2
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//task_3
let question_1 = prompt("What was yhe last movie you watched?", "");
let question_2 = prompt("How do you appreciate this film", "");
personalMovieDB.movies["a"] = question_1;
personalMovieDB.movies["b"] = question_2;
console.log(personalMovieDB);
