//Получение cookie со score с предыдущих страниц и вставка на странице
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let score = getCookie('score');
let scoreValue = document.querySelector('.header__score-value');
let scoreValueInSection = document.querySelector('.score-value');
scoreValue.innerHTML = score;
scoreValueInSection.innerHTML = score;


//Показ уведомления об окончании игры (score = 30) либо ссылки на try again
function showEndNotification(results) {
  let sectionWithResults = document.querySelector('.main__results__section');
  if (results == 30) {
    sectionWithResults.insertAdjacentHTML('beforeend', '<p class="end-notification">Игра окончена</p>');
  } else {
    sectionWithResults.insertAdjacentHTML('beforeend', '<a href="../pages/quiz.html" class="link link__try-again">Попробовать еще раз!</a>');
  }
}
showEndNotification(score);