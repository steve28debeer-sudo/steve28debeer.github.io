const fruits = [
  {
    name: "Apple",
    image: "https://waapple.org/wp-content/uploads/2021/06/Untitled-design-20-e1745534545813-658x677.png"
  },
  {
    name: "Banana",
    image: "https://fruitfortheoffice.co.uk/media/catalog/product/cache/22f8b13a74fce530a016d5f78df80ce0/b/a/banana_each_500x500_.png"
  },
  {
    name: "Orange",
    image: "https://www.veggipedia.nl/_next/image?url=https%3A%2F%2Fveggipedia-cms.production.taks.zooma.cloud%2Fassets%2FUploads%2FProducts%2Fsinaasappel-fruit-veggipedia__FitMaxWzYwMCw2MDBd.png&w=3840&q=75"
  },
  {
    name: "Pear",
    image: "https://www.stemilt.com/wp-content/uploads/2016/07/dAnjou.png"
  },
  {
    name: "Kiwi",
    image: "https://file.hstatic.net/1000141988/article/green-kiwi-yellow-kiwi_e394bab959d6486aa6ef095a26652e6e.png"
  }
];

let hiddenCardIndex = null;

function fruitHTML(index) {
  return `
    <img class="fruit-img" src="${fruits[index].image}" alt="${fruits[index].name}">
    ${fruits[index].name}
  `;
}

function showFruit(name, image) {
  document.getElementById("display").innerHTML = `
    <img class="big-fruit-img" src="${image}" alt="${name}">
    <h2>${name}</h2>
    <p>Say it with me: ${name}!</p>
  `;
}

function flipCardsGame() {
  resetCards();

  const cards = document.querySelectorAll(".fruit-card");

  cards.forEach(card => {
    card.innerHTML = "";
    card.classList.add("flipped");
  });

  hiddenCardIndex = Math.floor(Math.random() * cards.length);

  setTimeout(() => {
    cards.forEach((card, index) => {
      if (index !== hiddenCardIndex) {
        card.classList.remove("flipped");
        card.innerHTML = fruitHTML(index);
      }
    });

    document.getElementById("questionText").innerText =
      "🤔 What fruit is hiding?";
  }, 1000);
}

function revealCard(card) {
  const cards = Array.from(document.querySelectorAll(".fruit-card"));
  const clickedIndex = cards.indexOf(card);

  if (clickedIndex === hiddenCardIndex) {
    card.classList.remove("flipped");
    card.innerHTML = fruitHTML(clickedIndex);

    document.getElementById("questionText").innerText =
      `⭐ Correct! It is ${fruits[clickedIndex].name}!`;
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
}
