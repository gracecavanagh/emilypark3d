const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, 
  yValue = 0; 

window. addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  vValue = e.clientY - window.innerHeight / 2;

  let zValue = e.clientX - getComputedStyle(el).left;

  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = 'translateX(calc(-50% + ${
      -xValue * speedx
      }px)) translateY(calc(-50% + ${
      yValue * speedy
      }px)) perspective(2300px) translateZ(${yValue}px)';
});
