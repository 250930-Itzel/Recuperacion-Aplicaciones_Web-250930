document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
      menuToggle.textContent = expanded ? "Menú" : "Cerrar";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Menú";
      });
    });
  }

  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => {
      const detailId = button.getAttribute("aria-controls");
      const detail = document.getElementById(detailId);
      if (!detail) return;

      const willOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(willOpen));
      detail.hidden = !willOpen;
      button.innerHTML = willOpen
        ? 'Ocultar detalles <span aria-hidden="true">−</span>'
        : 'Ver detalles <span aria-hidden="true">＋</span>';
    });
  });

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
});