import birdsData from './birds.js';

//Получение cookie со score с предыдущих страниц
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let score = getCookie('score');
let scoreValue = document.querySelector('.header__score-value');
scoreValue.innerHTML = score;


//Вставка рандомного аудио птицы в основной section
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomInt(0, 5);
let audioBird = birdsData[4][randomNum]['audio'];
let nameBird = birdsData[4][randomNum]['name'];
let divAudioBird = document.querySelector('.main__bird-audio');

divAudioBird.innerHTML = `<audio controls class="audio-control"><source src="${audioBird}" data-name="${nameBird}" type="audio/mpeg"></audio>`;


//Вставка соответствующего описания птицы в правый section
let listAudioBird = document.querySelector('.list__bird-audio');
let birdDesc = document.querySelector('.section__bird__desc');

function writeBirdDescription(event) {
  let currentElem = event.target;
  let arrBirdNames = document.querySelectorAll('.list__bird-audio__item');

    for (let i = 0; i < arrBirdNames.length; i++) {
        if (currentElem.innerText == 'Орёл') {
            birdDesc.innerHTML = `
            <div class="bird__desc">
              <div class="bird__desc-media">
                <img src="${birdsData[4][0]["image"]}" alt="a bird" class="bird__desc-media-img">
                <div class="bird__desc-media-audio">
                  <p class="bird__desc-media-name">
                    ${birdsData[4][0]["name"]}
                  </p>
                  <hr class="hr">
                  <p class="bird__desc-media-species">
                    ${birdsData[4][0]["species"]}
                  </p>
                  <hr class="hr">
                  <audio controls><source src="${birdsData[4][0]["audio"]}" type="audio/mpeg"></audio>
                </div>
              </div>
              <div class="bird__desc-text">
                ${birdsData[4][0]["description"]}
              </div>
            </div>
            `
            break;
        } else if (currentElem.innerText == 'Коршун') {
            birdDesc.innerHTML = `
            <div class="bird__desc">
              <div class="bird__desc-media">
                <img src="${birdsData[4][1]["image"]}" alt="a bird" class="bird__desc-media-img">
                <div class="bird__desc-media-audio">
                  <p class="bird__desc-media-name">
                    ${birdsData[4][1]["name"]}
                  </p>
                  <hr class="hr">
                  <p class="bird__desc-media-species">
                    ${birdsData[4][1]["species"]}
                  </p>
                  <hr class="hr">
                  <audio controls><source src="${birdsData[4][1]["audio"]}" type="audio/mpeg"></audio>
                </div>
              </div>
              <div class="bird__desc-text">
                ${birdsData[4][1]["description"]}
              </div>
            </div>
            `
            break;
        } else if (currentElem.innerText == 'Лунь') {
            birdDesc.innerHTML = `
            <div class="bird__desc">
              <div class="bird__desc-media">
                <img src="${birdsData[4][2]["image"]}" alt="a bird" class="bird__desc-media-img">
                <div class="bird__desc-media-audio">
                  <p class="bird__desc-media-name">
                    ${birdsData[4][2]["name"]}
                  </p>
                  <hr class="hr">
                  <p class="bird__desc-media-species">
                    ${birdsData[4][2]["species"]}
                  </p>
                  <hr class="hr">
                  <audio controls><source src="${birdsData[4][2]["audio"]}" type="audio/mpeg"></audio>
                </div>
              </div>
              <div class="bird__desc-text">
                ${birdsData[4][2]["description"]}
              </div>
            </div>
            `
            break;
        } else if (currentElem.innerText == 'Сокол') {
            birdDesc.innerHTML = `
            <div class="bird__desc">
              <div class="bird__desc-media">
                <img src="${birdsData[4][3]["image"]}" alt="a bird" class="bird__desc-media-img">
                <div class="bird__desc-media-audio">
                  <p class="bird__desc-media-name">
                    ${birdsData[4][3]["name"]}
                  </p>
                  <hr class="hr">
                  <p class="bird__desc-media-species">
                    ${birdsData[4][3]["species"]}
                  </p>
                  <hr class="hr">
                  <audio controls><source src="${birdsData[4][3]["audio"]}" type="audio/mpeg"></audio>
                </div>
              </div>
              <div class="bird__desc-text">
                ${birdsData[4][3]["description"]}
              </div>
            </div>
            `
            break;
        } else if (currentElem.innerText == 'Ястреб') {
            birdDesc.innerHTML = `
            <div class="bird__desc">
              <div class="bird__desc-media">
                <img src="${birdsData[4][4]["image"]}" alt="a bird" class="bird__desc-media-img">
                <div class="bird__desc-media-audio">
                  <p class="bird__desc-media-name">
                    ${birdsData[4][4]["name"]}
                  </p>
                  <hr class="hr">
                  <p class="bird__desc-media-species">
                    ${birdsData[4][4]["species"]}
                  </p>
                  <hr class="hr">
                  <audio controls><source src="${birdsData[4][4]["audio"]}" type="audio/mpeg"></audio>
                </div>
              </div>
              <div class="bird__desc-text">
                ${birdsData[4][4]["description"]}
              </div>
            </div>
            `
            break;
        } else if (currentElem.innerText == 'Филин') {
            birdDesc.innerHTML = `
            <div class="bird__desc">
              <div class="bird__desc-media">
                <img src="${birdsData[4][5]["image"]}" alt="a bird" class="bird__desc-media-img">
                <div class="bird__desc-media-audio">
                  <p class="bird__desc-media-name">
                    ${birdsData[4][5]["name"]}
                  </p>
                  <hr class="hr">
                  <p class="bird__desc-media-species">
                    ${birdsData[4][5]["species"]}
                  </p>
                  <hr class="hr">
                  <audio controls><source src="${birdsData[4][5]["audio"]}" type="audio/mpeg"></audio>
                </div>
              </div>
              <div class="bird__desc-text">
                ${birdsData[4][5]["description"]}
              </div>
            </div>
            `
            break;
        }
    }
}
listAudioBird.addEventListener('click', writeBirdDescription);


//Определение правильного ответа, увеличение score, открытие доступа к next level
const audioTrue = new Audio('audio/true-answ.mp3');
const audioFalse = new Audio('audio/false-answ.mp3');
let count = 0;

function defineTrueAnswer(event) {
  let currentElem = event.target;
  let currentNum = currentElem.getAttribute('data-num');
  let nameBirdFromSection = document.querySelector('.main__bird-name');
  let imgBirdFromSection = document.querySelector('.main__bird-img');
  let buttonNext = document.querySelector('.button');
  let audioControl = document.querySelector('.audio-control');

  if (currentElem.innerText == nameBird) {
    nameBirdFromSection.innerText = nameBird;
    imgBirdFromSection.src = birdsData[4][currentNum]['image'];
    currentElem.classList.add('style__true-answer');
    buttonNext.classList.add('style__btn-next');
    buttonNext.href = "../../songbird/pages/seabirds.html";
    listAudioBird.removeEventListener('click', defineTrueAnswer);
    audioTrue.play();

    if (count == 0) {
      score++;
      score++;
      score++;
      score++;
      score++;
    }
    else if (count == 1) {
      score++;
      score++;
      score++;
      score++;
    }
    else if (count == 2) {
      score++;
      score++;
      score++;
    }
    else if (count == 3) {
      score++;
      score++;
    }
    else if (count == 4) {
      score++;
    }

    audioControl.pause();

    scoreValue.innerHTML = score;
    document.cookie = `score=${score}`;
  } else {
    currentElem.classList.add('style__false-answer');
    audioFalse.play();
    count++;
  }
}
listAudioBird.addEventListener('click', defineTrueAnswer);