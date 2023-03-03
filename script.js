const luna = document.getElementById('luna');

window.addEventListener('scroll', () => {
  let valueY = window.scrollY;

  luna.style.marginTop = valueY * 0.7 + 'px';
  luna.style.marginLeft = valueY * 0.7 + 'px';
})