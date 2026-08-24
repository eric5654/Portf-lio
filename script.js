/* =========================
   TYPING EFFECT
========================= */

const text =
  "Construindo soluções modernas com tecnologia e inovação.";

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


/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.15
  }

);

document
  .querySelectorAll(".hidden")
  .forEach((element) => observer.observe(element));


/* =========================
   SCROLL INDICATOR
========================= */

const indicator =
  document.getElementById("scrollIndicator");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    indicator.style.opacity = "0";

    indicator.style.pointerEvents = "none";

  } else {

    indicator.style.opacity = "1";

    indicator.style.pointerEvents = "auto";

  }

});


/* =========================
   MOUSE GLOW
========================= */

document.addEventListener("mousemove", (event) => {

  const x = event.clientX;
  const y = event.clientY;

  document.documentElement.style.setProperty(
    "--mouse-x",
    `${x}px`
  );

  document.documentElement.style.setProperty(
    "--mouse-y",
    `${y}px`
  );

});