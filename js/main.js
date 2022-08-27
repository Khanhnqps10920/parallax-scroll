
let moon = document.querySelector('#moon');
let star = document.querySelector('#star');
let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
let mountainBehind = document.querySelector('#montainsBehind');
let mountainFront = document.querySelector('#mountainsFront');
let headerE = document.querySelector('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  star.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountainBehind.style.top = value * 0.5 + 'px'
  mountainFront.style.top = value * 0 + 'px'
  text.style.marginRight = value * 4 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
  headerE.style.top = value * 0.5 + 'px'
})