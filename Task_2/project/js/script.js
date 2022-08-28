/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "photo_2.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

//  1
const advert = document.querySelector(".promo__adv");
console.log(advert);
advert.remove();

//2
const ganre = document.getElementsByClassName("promo__genre")[0];
//const ganre = document.querySelector(".promo__genre");
console.log(ganre);
ganre.innerHTML = "Драма";

const back = document.querySelector(".promo__bg");
console.log(back);
back.style.backgroundImage = 'url("img/photo_2.jpg")';

let films = document.querySelectorAll(".promo__interactive-item");
console.log(films);

movieDB.movies = movieDB.movies.sort();
console.log(movieDB.movies);
films.forEach((film, i) => {
  film.textContent = `${i + 1} ${movieDB.movies[i]}`;
});
