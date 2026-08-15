const buttons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const categories = card.dataset.cat || "";

      if (filter === "all" || categories.includes(filter)) {
        card.classList.remove("hidden-card");
      } else {
        card.classList.add("hidden-card");
      }
    });
  });
});
