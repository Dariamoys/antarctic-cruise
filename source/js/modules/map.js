const ymaps = window.ymaps;
const markCoords = [59.937465, 30.322623];
const mapContainer = document.querySelector('#map');

export const initMap = () => {
  if (mapContainer) {
    ymaps.ready(init);
  }
};

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.938405, 30.323118],
    zoom: 16,
    controls: [],
  }, {
    searchControlProvider: 'yandex#search',
  });

  const myMark = new ymaps.Placemark(markCoords, {
    hintContent: 'Мы находимся здесь',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/sprite/address-mark.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects.add(myMark);
}
