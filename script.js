/* TYPING EFFECT */
const text = "Construindo soluções modernas com tecnologia e inovação.";
const typingEl = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 45);
  }
}
typeEffect();

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* ESCONDER INDICADOR AO ROLAR */
const indicator = document.getElementById("scrollIndicator");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    indicator.style.opacity = "0";
  } else {
    indicator.style.opacity = "0.9";
  }
});
