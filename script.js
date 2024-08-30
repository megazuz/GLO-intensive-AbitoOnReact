const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
  {
    id: 0,
    title: 'Пвх материал высшего сорта',
    price: '970 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './public/images/card_image.png',
  },
  {
    id: 1,
    title: 'Пвх материал 1-го сорта',
    price: '770 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './public/images/card_image.png',
  },
  {
    id: 2,
    title: 'Пвх материал 2-го сорта',
    price: '570 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './public/images/card_image.png',
  },
  {
    id: 3,
    title: 'Пвх материал 3-го сорта',
    price: '370 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './public/images/card_image.png',
  },
  {
    id: 4,
    title: 'Пвх материал 4-го сорта',
    price: '270 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './public/images/card_image.png',
  },
  {
    id: 5,
    title: 'Пвх материал БРАК',
    price: '170 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './public/images/card_image.png',
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = '';
  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      'beforeend',
      `
                <a href="product.html" class="content-main__list-item">
                  <div class="content-main__list-item--img">
                    <img src="${item.image}" alt="card_image" width="100%" />
                  </div>
                  <h5 class="content-main__list-item--title">${item.title}</h5>
                  <strong class="content-main__list-item--price">${item.price}</strong>
                  <span class="content-main__list-item--desc">${item.address}</span>
                  <span class="content-main__list-item--desc">${item.date}</span>
                </a>`,
    );
  });
};

const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

render(cardArray);

searchBtn.addEventListener('click', () => {
  render(filteredArray(cardArray, searchInput.value));
});
