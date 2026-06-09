const fruits = [
  {
    name: "Apple",
    letter: "Aa",
    sound: "/a/",
    chant: "Aa, /a/, Apple!",
    image: "https://waapple.org/wp-content/uploads/2021/06/Untitled-design-20-e1745534545813-658x677.png"
  },
  {
    name: "Orange",
    letter: "Oo",
    sound: "/o/",
    chant: "Oo, /o/, Orange!",
    image: "https://www.veggipedia.nl/_next/image?url=https%3A%2F%2Fveggipedia-cms.production.taks.zooma.cloud%2Fassets%2FUploads%2FProducts%2Fsinaasappel-fruit-veggipedia__FitMaxWzYwMCw2MDBd.png&w=3840&q=75"
  },
  {
    name: "Banana",
    letter: "Bb",
    sound: "/b/",
    chant: "Bb, /b/, Banana!",
    image: "https://fruitfortheoffice.co.uk/media/catalog/product/cache/22f8b13a74fce530a016d5f78df80ce0/b/a/banana_each_500x500_.png"
  },
  {
    name: "Pear",
    letter: "Pp",
    sound: "/p/",
    chant: "Pp, /p/, Pear!",
    image: "https://www.stemilt.com/wp-content/uploads/2016/07/dAnjou.png"
  },
  {
    name: "Kiwi",
    letter: "Kk",
    sound: "/k/",
    chant: "Kk, /k/, Kiwi!",
    image: "https://file.hstatic.net/1000141988/article/green-kiwi-yellow-kiwi_e394bab959d6486aa6ef095a26652e6e.png"
  }
];

let hiddenCardIndex = null;

function sayPrompt(text, displayId = "helloDisplay") {
  const display = document.getElementById(displayId);
  if (display) {
    display.innerText = text;
  }
}

function fruitHTML(index) {
  const fruit = fruits[index];
  return `
    <img class="fruit-img" src="${fruit.image}" alt="${fruit.name}">
    <span class="fruit-name">${fruit.name}</span>
  `;
}

function showFruit(index) {
  const fruit = fruits[index];
  document.getElementById("display").innerHTML = `
    <span class="letter-bubble">${fruit.letter}</span>
    <img class="big-fruit-img" src="${fruit.image}" alt="${fruit.name}">
    <h2>${fruit.name}</h2>
    <p class="sound-line">Sound: ${fruit.sound}</p>
    <p><strong>Teacher chant:</strong> ${fruit.chant}</p>
    <p>Ask: “What fruit is it?”</p>
  `;
}

function startHideGame() {
  resetCards();
  const cards = document.querySelectorAll(".fruit-card");
  hiddenCardIndex = Math.floor(Math.random() * cards.length);

  cards.forEach(card => card.classList.add("flipped"));
  document.getElementById("questionText").innerText = "Close your eyes... 3, 2, 1!";
  document.getElementById("gameFeedback").innerText = "One fruit is hiding!";

  setTimeout(() => {
    cards.forEach((card, index) => {
      if (index !== hiddenCardIndex) {
        card.classList.remove("flipped");
        card.innerHTML = fruitHTML(index);
      }
    });
    document.getElementById("questionText").innerText = `🤔 Where is ${fruits[hiddenCardIndex].name}?`;
    document.getElementById("gameFeedback").innerText = "Tap the mystery card!";
  }, 900);
}

function revealCard(card) {
  const cards = Array.from(document.querySelectorAll(".fruit-card"));
  const clickedIndex = cards.indexOf(card);

  if (hiddenCardIndex === null) {
    document.getElementById("gameFeedback").innerText = "Press Hide One Fruit first!";
    return;
  }

  if (clickedIndex === hiddenCardIndex) {
    card.classList.remove("flipped");
    card.innerHTML = fruitHTML(clickedIndex);
    document.getElementById("questionText").innerText = `⭐ Correct! It is ${fruits[clickedIndex].name}!`;
    document.getElementById("gameFeedback").innerText = "Great job! Say it loudly!";
  } else {
    document.getElementById("gameFeedback").innerText = "Try again! Where is it?";
  }
}

function resetCards() {
  const cards = document.querySelectorAll(".fruit-card");
  cards.forEach((card, index) => {
    card.classList.remove("flipped");
    card.innerHTML = fruitHTML(index);
  });
  hiddenCardIndex = null;
  document.getElementById("questionText").innerText = "Look carefully!";
  document.getElementById("gameFeedback").innerText = "Ready?";
}

function showReview(index) {
  const fruit = fruits[index];
  document.getElementById("reviewAnswer").innerHTML = `It is <strong>${fruit.name}</strong>! ${fruit.chant}`;
}

function buildPage() {
  const fruitButtons = document.getElementById("fruitButtons");
  const cardRow = document.getElementById("cardRow");
  const reviewGrid = document.getElementById("reviewGrid");

  fruits.forEach((fruit, index) => {
    const button = document.createElement("button");
    button.className = "fruit-choice";
    button.innerText = `${fruit.letter} ${fruit.name}`;
    button.onclick = () => showFruit(index);
    fruitButtons.appendChild(button);

    const card = document.createElement("div");
    card.className = "fruit-card";
    card.onclick = () => revealCard(card);
    card.innerHTML = fruitHTML(index);
    cardRow.appendChild(card);

    const review = document.createElement("div");
    review.className = "review-card-button";
    review.onclick = () => showReview(index);
    review.innerHTML = `<img class="fruit-img" src="${fruit.image}" alt="${fruit.name}"><span>?</span>`;
    reviewGrid.appendChild(review);
  });
}

buildPage();
