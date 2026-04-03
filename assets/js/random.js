function getRandomSnack() {
  const randomIndex = Math.floor(Math.random() * snacks.length);
  return snacks[randomIndex];
}

function renderRandomSnack() {
  const container = document.getElementById("randomSnackResult");
  if (!container) return;

  const snack = getRandomSnack();
  container.innerHTML = createSnackCard(snack);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("pickSnackBtn");
  if (!button) return;

  button.addEventListener("click", renderRandomSnack);
  renderRandomSnack();
});