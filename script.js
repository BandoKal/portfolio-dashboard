const filterButtons = document.querySelectorAll(".segment");
const projectCards = document.querySelectorAll(".project-card");
const caseTabs = document.querySelectorAll(".case-tab");
const casePanels = document.querySelectorAll(".case-study-panel");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const visible = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !visible);
    });
  });
});

caseTabs.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCase = button.dataset.case;

    caseTabs.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    casePanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.casePanel === selectedCase);
    });
  });
});
