function getSnackIdFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function getStoredRatingKey(snackId) {
  return `snackatlas-rating-${snackId}`;
}

function createStars(currentRating) {
  return [1, 2, 3, 4, 5]
    .map((value) => {
      const activeClass = value <= currentRating ? "star active" : "star";
      return `<button class="${activeClass}" data-rating="${value}" aria-label="${value} sterren">★</button>`;
    })
    .join("");
}

function renderSnackDetail() {
  const container = document.getElementById("detailContainer");
  if (!container) return;

  const snackId = getSnackIdFromQuery();
  const snack = snacks.find((item) => item.id === snackId) || snacks[0];
  const storedRating = Number(localStorage.getItem(getStoredRatingKey(snack.id))) || 0;

  container.innerHTML = `
    <section class="detail-media card">
      <img src="${snack.image}" alt="${snack.name}">
    </section>
    <section class="detail-content card">
      <p class="eyebrow">${snack.country} - ${snack.continent}</p>
      <h1>${snack.name}</h1>
      <p>${snack.description}</p>

      <h2>Kort verhaal</h2>
      <p>${snack.story}</p>

      <h2>Eenvoudig recept</h2>
      <ol>
        ${snack.recipe.map((step) => `<li>${step}</li>`).join("")}
      </ol>

      <h2>Jouw beoordeling</h2>
      <div id="ratingStars" class="rating-stars">${createStars(storedRating)}</div>
      <p id="ratingText" class="subtle">${storedRating ? `Je gaf ${storedRating} van 5 sterren.` : "Klik op een ster om te beoordelen."}</p>
    </section>
  `;

  const starsWrap = document.getElementById("ratingStars");
  const ratingText = document.getElementById("ratingText");

  if (!starsWrap || !ratingText) return;

  starsWrap.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains("star")) return;

    const value = Number(target.dataset.rating);
    if (!value) return;

    localStorage.setItem(getStoredRatingKey(snack.id), String(value));
    starsWrap.innerHTML = createStars(value);
    ratingText.textContent = `Je gaf ${value} van 5 sterren.`;
  });
}

document.addEventListener("DOMContentLoaded", renderSnackDetail);