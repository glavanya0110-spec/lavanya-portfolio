document.addEventListener("DOMContentLoaded", () => {

  // Smooth page fade-in
  document.body.classList.add("loaded");


  // Add a small scroll effect to the header
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });


  // Small hover animation for project/cards
  const cards = document.querySelectorAll(
    ".card, .mini-card, .tcard, .featured, .project-card"
  );

  cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });

  });

});
