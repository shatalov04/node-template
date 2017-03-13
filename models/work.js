'use strict';

const mongoose = require('mongoose');
const workSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Укажите имя проекта']
    },
    technologies: {
        type: String,
        required: [true, 'Укажите используемые технологии']
    },
    link: {
        type: String,
        required: [true, 'Укажите содержимое статьи']
    },
    image: {
        type: String,
    },
});

mongoose.model('work',workSchema);

//
//
// var works = {
//     work1: {
//         link: './assets/img/work-1.png',
//         title: 'сайт школы онлайн образования',
//         skills: 'HTML, CSS, JavaScript',
//         site: 'https://loftschool.com/'
//     },
//     work2: {
//         link: './assets/img/work-2.png',
//         title: 'сайт агенства интернет решений',
//         skills: 'node.js, mongodb, angular',
//         site: 'https://itloft.ru/'
//     },
//     work3: {
//         link: './assets/img/work-3.png',
//         title: 'сайт портала обучающих уроков',
//         skills: 'php, laravel',
//         site: 'https://loftblog.ru/'
//     },
//     work4: {
//         link: './assets/img/work-4.png',
//         title: 'сайт "атма йога"',
//         skills: 'UX/UI Design, SEO',
//         site: 'http://atmayoga.ru/'
//     }
// };