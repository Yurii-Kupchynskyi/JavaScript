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

//3
const back = document.querySelector(".promo__bg");
console.log(back);
back.style.backgroundImage = 'url("img/photo_2.jpg")';

//4,5
let films = document.querySelectorAll(".promo__interactive-item");
console.log(films);

function sortFilms() {
  movieDB.movies = movieDB.movies.sort();
  // console.log(movieDB.movies);
  films.forEach((film, i) => {
    film.textContent = `${i + 1} ${movieDB.movies[i]}`;
  });
}
sortFilms();

/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту 
*/

let buttonConfirm = document.querySelector("button");
buttonConfirm.addEventListener("click", addFilm);

function addFilm(e) {
  e.preventDefault();
  movieDB.movies.push(
    document.querySelector(".adding__input").value.toUpperCase()
  );

  //sortFilms();
  movieDB.movies = movieDB.movies.sort();
  checkForLenght();
  displayNewList();

  console.log(movieDB.movies);
  // console.log(films);
}

function displayNewList() {
  let list_of_films = document.querySelector(".promo__interactive-list");
  console.log(list_of_films);

  films.forEach((key, i) => {
    key.remove();
    list_of_films.innerHTML = "";
  });
  movieDB.movies.forEach((film, i) => {
    list_of_films.innerHTML += `
    <li class='promo__interactive-item'>${i + 1} ${film}</li>`;
  });
  console.log(list_of_films);
}

function checkForLenght() {
  movieDB.movies.forEach((film, i) => {
    // if (film.length > 11) {
    //   film = film.slice(0, 11);
    //   film = "Kring";
    // }
    console.log(film);
    film = "";
    console.log(film);
  });

  // for (let i = 0; i < movieDB.movies.length - 1; i++) {
  //   if (movieDB.movies[i].length > 21) {
  //     movieDB.movies[i] = movieDB.movies[i].slice(0, 21) + "...";
  //   }
  // }
}
