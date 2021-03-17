const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', (event) => {
  container.classList.add('hoverLeft');
});
left.addEventListener('mouseleave', (event) => {
  container.classList.remove('hoverLeft');
});
right.addEventListener('mouseenter', (event) => {
  container.classList.add('hoverRight');
});
right.addEventListener('mouseleave', (event) => {
  container.classList.remove('hoverRight');
});
