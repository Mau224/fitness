'use strict';

var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slides = document.getElementsByClassName('reviews__slide');
for (var i = 0; i < slides.length; i++) {
  slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
  var activeEl = document.querySelector('.active');
  if (activeEl.nextElementSibling) {
    activeEl.previousElementSibling.style.display = 'none';
    activeEl.classList.remove('active');
    activeEl.nextElementSibling.classList.add('active');
    this.classList.remove('no_active');
    prew.classList.remove('no_active');
    if (!activeEl.nextElementSibling.nextElementSibling) {
      this.classList.add('no_active');
    }
  }
};

prew.onclick = function () {
  var activeEl = document.querySelector('.active');
  if (activeEl.previousElementSibling) {
    activeEl.previousElementSibling.style.display = 'block';
    activeEl.classList.remove('active');
    activeEl.previousElementSibling.classList.add('active');
    this.classList.remove('no_active');
    next.classList.remove('no_active');
    if (!activeEl.previousElementSibling.previousElementSibling) {
      this.classList.add('no_active');
    }
  }
};
