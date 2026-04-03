function getCurrentPage() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  if (file === "index.html") return "home";
  if (file === "explore.html") return "explore";
  if (file === "random.html") return "random";
  if (file === "about.html") return "about";
  return "";
}

function setActiveNavLink() {
  const currentPage = getCurrentPage();
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === currentPage);
  });
}

function createSnackCard(snack) {
  return `
    <article class="snack-card">
      <img src="${snack.image}" alt="${snack.name}" loading="lazy">
      <div class="snack-card-body">
        <h3>${snack.name}</h3>
        <p class="meta">${snack.country} - ${snack.continent}</p>
        <p>${snack.description}</p>
        <a class="btn btn-primary" href="detail.html?id=${snack.id}">Bekijk details</a>
      </div>
    </article>
  `;
}

function setupMobileMenu() {
  const button = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  if (!button || !links) return;

  button.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

function renderHomeGrid() {
  const grid = document.getElementById("homeSnackGrid");
  if (!grid || !Array.isArray(snacks)) return;

  const featured = snacks.slice(0, 8);
  grid.innerHTML = featured.map(createSnackCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink();
  setupMobileMenu();
  renderHomeGrid();
});