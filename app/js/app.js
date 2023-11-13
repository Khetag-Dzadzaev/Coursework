document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-menu").classList.toggle("open");
  document.querySelector(".burger-line").classList.toggle("active");
});

window.addEventListener('scroll', function () {
  var header = document.querySelector('header'); // Замените 'header' на селектор вашего хедера

  if (window.pageYOffset > 100) { // Измените значение 200 на желаемую высоту
    header.style.backgroundColor = "#fff"; // Замените 'red' на желаемый цвет
    document.querySelector('.nav-menu').style.backgroundColor = 'white';
    header.classList.add("active");
  } else {
    header.style.backgroundColor = 'initial'; // Возвращаем исходный цвет, если не достигнута высота
    header.style.backgroundColor = 'initial'; // Возвращаем исходный цвет, если не достигнута высота
    document.querySelector('.nav-menu').style.backgroundColor =
      'initial';
    header.classList.remove("active");
  }
});

var items = document.querySelectorAll('.menu__item');
const titles = document.querySelectorAll('.menu');

window.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset;


  var active;
  for (var i = titles.length - 1; i >= 0; i--) {
    console.log(titles[i].offsetTop);

    if (titles[i].offsetTop - 555 < scrolled) {
      active = i;
      break;
    }
    if (titles[i].offsetTop + 300 > scrolled) {
      items[i].classList.remove('active');
    }
  }

  if (active !== undefined) {
    var active = items[active];
    if (!active.classList.contains("active")) {
      let old = document.querySelector('.menu__item.active');
      console.log(old);

      if (old) {
        old.classList.remove('active');
      }
      active.classList.add('active');
    } else { }
  }

});


document.querySelector("#button-modal").addEventListener("click", function () {
  document.body.classList.toggle("noscrole");
  document.querySelector(".modal").classList.toggle("active");
  document.querySelector(".modal-content__close").classList.remove("close");
});
document.querySelector(".modal-content__close").addEventListener("click", function () {
  document.body.classList.remove("noscrole");
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".modal-content__close").classList.toggle("close");
});
