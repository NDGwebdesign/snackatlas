function getUniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]))].sort((a, b) => a.localeCompare(b));
}

function fillSelectOptions(select, options, defaultLabel) {
  select.innerHTML = [
    `<option value="">${defaultLabel}</option>`,
    ...options.map((option) => `<option value="${option}">${option}</option>`)
  ].join("");
}

function renderExploreGrid(data) {
  const grid = document.getElementById("exploreSnackGrid");
  if (!grid) return;

  if (!data.length) {
    grid.innerHTML = '<p class="empty-state">Geen snacks gevonden voor deze filters.</p>';
    return;
  }

  grid.innerHTML = data.map(createSnackCard).join("");
}

function filterSnacks() {
  const continentValue = document.getElementById("continentFilter").value;
  const countryValue = document.getElementById("countryFilter").value;

  const filtered = snacks.filter((snack) => {
    const continentMatch = continentValue ? snack.continent === continentValue : true;
    const countryMatch = countryValue ? snack.country === countryValue : true;
    return continentMatch && countryMatch;
  });

  renderExploreGrid(filtered);
}

function setupExplorePage() {
  const continentSelect = document.getElementById("continentFilter");
  const countrySelect = document.getElementById("countryFilter");
  const resetButton = document.getElementById("resetFilters");
  const map = document.getElementById("miniMap");

  if (!continentSelect || !countrySelect || !resetButton) return;

  const continents = getUniqueValues(snacks, "continent");
  const countries = getUniqueValues(snacks, "country");

  fillSelectOptions(continentSelect, continents, "Alle continenten");
  fillSelectOptions(countrySelect, countries, "Alle landen");

  continentSelect.addEventListener("change", filterSnacks);
  countrySelect.addEventListener("change", filterSnacks);

  resetButton.addEventListener("click", () => {
    continentSelect.value = "";
    countrySelect.value = "";
    filterSnacks();
  });

  if (map) {
    map.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.classList.contains("map-pin")) return;

      const selectedCountry = target.dataset.country;
      if (!selectedCountry) return;

      countrySelect.value = selectedCountry;
      filterSnacks();
    });
  }

  filterSnacks();
}

document.addEventListener("DOMContentLoaded", setupExplorePage);