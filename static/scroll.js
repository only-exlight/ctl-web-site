var content = document.getElementsByClassName('content'),
    current = document.getElementById('current');

window.onscroll = function () {
    if (window.pageYOffset >= content.item(0).offsetTop - 140) {
        current.innerHTML = '/О нас';
    }
    if (window.pageYOffset >= content.item(1).offsetTop - 140) {
        current.innerHTML = '/О работе с нами';
    }
    if (window.pageYOffset >= content.item(2).offsetTop - 140) {
        current.innerHTML = '/О совместной работе';
    }
    if (window.pageYOffset >= content.item(3).offsetTop - 140) {
        current.innerHTML = '/О тестовом сервере';
    }
    if (window.pageYOffset >= content.item(4).offsetTop - 140) {
        current.innerHTML = '/Наши технологии';
    }
}