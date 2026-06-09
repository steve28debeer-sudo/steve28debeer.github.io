let missingFruit = "";

function showFruit(name, emoji) {
  const display = document.getElementById("display");

  display.innerHTML = `
    <span class="big-fruit">${emoji}</span>
    <h2>${name}</h2>
    <p>Say it with me: ${name}!</p>
  `;
}

function hideFruit() {
  const cards = document.querySelectorAll(".fruit-card");

  resetCards();

  const updatedCards = document.querySelectorAll(".fruit-card");
  const randomIndex = Math.floor(Math.random() * updatedCards.length);
  const chosenCard = updatedCards[randomIndex];

  missingFruit = chosenCard.textContent.trim();

  chosenCard.innerHTML = "";
  chosenCard.classList.add("hidden-card");

  document.getElementById("questionText").textContent =
    "Which fruit is missing?";
}

function resetCards() {
  const fruits = [
    "🍎<br>Apple",
    "🍌<br>Banana",
    "🍊<br>Orange",
    "🍐<br>Pear",
    "🥝<br>Kiwi"
  ];

  const cards = document.querySelectorAll(".fruit-card");

  cards.forEach((card, index) => {
    card.innerHTML = fruits[index];
    card.classList.remove("hidden-card");
  });

  document.getElementById("questionText").textContent =
    "Look carefully! Which fruit will disappear?";
}
