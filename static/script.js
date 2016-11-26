var doc = document,
    slider = doc.getElementById('slider'),
    navRound = doc.querySelectorAll('.it'),
    slRadio = doc.querySelectorAll('.sl-nav'),
    text = doc.getElementById('slText'),
    slRadioForm = doc.getElementById('slRadioBut');

var curItem = 0,
    timer;


var text1 = '<h1>NodeJS</h1><p>Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и Mac OS) и даже программировать микроконтроллеры (например, tessel и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.</p>',
    text2 = '<h1>Mongo DB</h1><p>MongoDB (от англ. humongous — огромный) — документоориентированная система управления базами данных (СУБД) с открытым исходным кодом, не требующая описания схемы таблиц. Написана на языке C++.</p>',
    text3 = '<h1>OpenSUSE</h1><p>Проект openSUSE - это попытка сделать использование Linux повсеместным. openSUSE создает лучший в мире дистрибутив Linux, работая вместе открыто, прозрачно и дружелюбно как часть мирового сообщества свободного и открытого программного обеспечения.<br>Проект управляется сообществом и полагается на индивидуальных помощников, работающих тестерами, переводчиками, писателями документации, экспертами по удобству пользования, художниками, представителями и разработчиками. Проект охватывает большое разнообразие технологий, людей с разными уровнями знаний, говорящих на разных языках и различных культурных ценностей.<br>Have a lot of fun...</p>',
    text4 = '<h1>GIT</h1><p>Git — мощная и сложная распределенная система контроля версий. Понимание всех возможностей git открывает для разработчика новые горизонты в управлении исходным кодом. Самый верный способ обучиться владению Git — испытать его своими руками.<br>Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, первая версия выпущена 7 апреля 2005 года. На сегодняшний день его поддерживает Джунио Хамано.<br>Примерами проектов, использующих Git, являются Ядро Linux, Swift, Android, Drupal, Cairo, GNU Core Utilities, Mesa, Wine, Chromium, Compiz Fusion, FlightGear, jQuery, PHP, NASM, MediaWiki, DokuWiki, Qt и некоторые дистрибутивы Linux.<br>Программа является свободной и выпущена под лицензией GNU GPL версии 2.</p>';
autoSwith();

navRound[0].style.background = 'url(image/slider/sl1.jpg)';
navRound[1].style.background = 'url(image/slider/sl2.jpg)';
navRound[2].style.background = 'url(image/slider/sl3.jpg)';
navRound[3].style.background = 'url(image/slider/sl4.jpg)';

navRound[0].style.backgroundSize = 'cover';
navRound[1].style.backgroundSize = 'cover';
navRound[2].style.backgroundSize = 'cover';
navRound[3].style.backgroundSize = 'cover';

navRound[0].style.backgroundPosition = 'center';
navRound[1].style.backgroundPosition = 'center';
navRound[2].style.backgroundPosition = 'center';
navRound[3].style.backgroundPosition = 'center';




/*
Навигация слайдера
==================*/
navRound[0].onclick = function () {
    curItem = 0;
    clearTimeout(timer);
    SliderContent();
    autoSwith();
    pl_pa.className = 'fa fa-play';
}

navRound[1].onclick = function () {
    curItem = 1;
    clearTimeout(timer);
    SliderContent();
    autoSwith();
    pl_pa.className = 'fa fa-play';
}

navRound[2].onclick = function () {
    curItem = 2;
    clearTimeout(timer);
    SliderContent();
    autoSwith();
    pl_pa.className = 'fa fa-play';
}

navRound[3].onclick = function () {
    curItem = 3;
    clearTimeout(timer);
    SliderContent();
    autoSwith();
    pl_pa.className = 'fa fa-play';
}


/*
Автопереключение слайдера
=========================*/

function autoSwith() {
    timer = setInterval(function () {
        curItem++;
        if (curItem >= 4) curItem = 0;
        SliderContent();
    }, 6000);
};


let next = doc.getElementById('next'),
    back = doc.getElementById('back'),
    pl_pa = doc.getElementById('pl_pa'),
    play = true;

next.onclick = function () {
    curItem++;
    if (curItem >= 4) curItem = 0;
    clearTimeout(timer);
    SliderContent();
    autoSwith();
    pl_pa.className = 'fa fa-play';
}

back.onclick = function () {
    curItem--;
    if (curItem < 0) curItem = 3;
    clearTimeout(timer);
    SliderContent();
    autoSwith();
    pl_pa.className = 'fa fa-play';
}

pl_pa.onclick = function () {
    play = !play;
    if (play) {
        autoSwith();
        pl_pa.className = 'fa fa-pause';
    } else {
        clearTimeout(timer);
        pl_pa.className = 'fa fa-play';
    }
}

/*Контент слайдера*/
function SliderContent() {
    if (curItem == 0) {
        slider.style.background = 'url(image/slider/sl1.jpg) center';
        slider.style.backgroundSize = 'cover';
        navRound[0].style.boxShadow = '0 0 15px #009dff';
        text.innerHTML = '';
        text.innerHTML = text1;
    } else {
        navRound[0].style.boxShadow = '';
    }

    if (curItem == 1) {
        slider.style.background = 'url(image/slider/sl2.jpg) center';
        slider.style.backgroundSize = 'cover';
        navRound[1].style.boxShadow = '0 0 15px #009dff';
        text.innerHTML = '';
        text.innerHTML = text2;

    } else {
        navRound[1].style.boxShadow = '';
    }

    if (curItem == 2) {
        slider.style.background = 'url(image/slider/sl3.jpg) center';
        slider.style.backgroundSize = 'cover';
        navRound[2].style.boxShadow = '0 0 15px #009dff';
        text.innerHTML = '';
        text.innerHTML = text3;
    } else {
        navRound[2].style.boxShadow = '';
    }

    if (curItem == 3) {
        slider.style.background = 'url(image/slider/sl4.jpg) center';
        slider.style.backgroundSize = 'cover';
        navRound[3].style.boxShadow = '0 0 15px #009dff';
        text.innerHTML = '';
        text.innerHTML = text4;
    } else {
        navRound[3].style.boxShadow = '';
    }
}