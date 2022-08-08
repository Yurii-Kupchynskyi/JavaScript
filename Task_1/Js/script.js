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

if (personalMovieDB.count < 10) {
  alert("You watched a small number of films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("You are typical viewer");
} else if (personalMovieDB.count > 30) {
  alert("You are movie buff)");
} else {
  alert("Something went wrong!");
}

console.log(personalMovieDB);
