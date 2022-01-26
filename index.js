/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:  ()=> {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
            
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != '' && b != '' && a != null && b != null) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectedPersonalLevels: function () {
        if (personalMovieDB.count < 10) {

            console.log("Просмотрено довольно мало фильмов");

        } else if (10 <= personalMovieDB.count && 30 > personalMovieDB.count) {
            console.log("Вы классический зритель");

        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
        console.log(personalMovieDB.count)
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },


    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let b = prompt(`Ваш любимый жанр под номером ${i}`, '');
           if ( b!= null && b != '') {
                personalMovieDB.genres[i - 1] = b;
           }else{
               i--
           }
        }
        personalMovieDB.genres.forEach((item,index)=>{
            let likeGenres =`Любимый жанр #${index + 1} - это ${item}`;
            console.log( likeGenres)
          })
    },
    toggleVisibleMyDB : function (bool){
        if (bool){
            personalMovieDB.privat = true;
        }else{
            personalMovieDB.privat = false;
        }
    }
}


// personalMovieDB.start()

//  personalMovieDB.rememberMyFilms();


// personalMovieDB.detectedPersonalLevels()
 personalMovieDB.toggleVisibleMyDB(true);


 personalMovieDB.showMyDB(personalMovieDB.privat);
 personalMovieDB.writeYourGenres();
 console.log(personalMovieDB.privat)
 console.log(personalMovieDB.genres)

