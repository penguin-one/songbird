import birdsData from './birds.js';

function outputAllBirdsDesc(obj) {
  let gallery = document.querySelector('.main__gallery');
  let arr = ['Разные птицы', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      if(j == 0) gallery.insertAdjacentHTML('beforeend', `<h2 class="bird__type">${arr[i]}</h2>`);

      for (let key in obj[i][j]) {
        if(key == 'name') gallery.insertAdjacentHTML('beforeend', `<h3 class="bird__name">${obj[i][j][key]}</h3>`);
        else if(key == 'species') gallery.insertAdjacentHTML('beforeend', `<h4 class="bird__species">${obj[i][j][key]}</h4>`);
        else if(key == 'description') gallery.insertAdjacentHTML('beforeend', `<p class="bird__desc">${obj[i][j][key]}</p>`);
        else if(key == 'image') gallery.insertAdjacentHTML('beforeend', `<img src="${obj[i][j][key]}" alt="image of bird" class="bird__img">`);
        else if(key == 'audio') gallery.insertAdjacentHTML('beforeend', `<audio controls class="bird__audio"><source src="${obj[i][j][key]}" type="audio/mpeg"></audio>`);
      }
    }
  }
}
outputAllBirdsDesc(birdsData);