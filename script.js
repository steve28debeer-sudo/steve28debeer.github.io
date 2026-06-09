const fruits = [
    {emoji:"🍎",name:"Apple"},
    {emoji:"🍌",name:"Banana"},
    {emoji:"🍊",name:"Orange"},
    {emoji:"🍐",name:"Pear"},
    {emoji:"🥝",name:"Kiwi"}
];

let hiddenCardIndex = null;

function showFruit(name,emoji){

    document.getElementById("display").innerHTML = `
        <span class="big-fruit">${emoji}</span>
        <h2>${name}</h2>
        <p>Say it with me: ${name}!</p>
    `;
}

function flipCardsGame(){

    resetCards();

    const cards = document.querySelectorAll(".fruit-card");

    cards.forEach(card=>{
        card.innerHTML="";
        card.classList.add("flipped");
    });

    hiddenCardIndex = Math.floor(Math.random()*cards.length);

    setTimeout(()=>{

        cards.forEach((card,index)=>{

            if(index !== hiddenCardIndex){

                card.classList.remove("flipped");

                card.innerHTML=
                `${fruits[index].emoji}<br>${fruits[index].name}`;

            }

        });

        document.getElementById("questionText").innerText =
        "🤔 What fruit is missing?";

    },1000);
}

function revealCard(card){

    const cards =
    Array.from(document.querySelectorAll(".fruit-card"));

    const clickedIndex = cards.indexOf(card);

    if(clickedIndex === hiddenCardIndex){

        card.classList.remove("flipped");

        card.innerHTML =
        `${fruits[clickedIndex].emoji}<br>${fruits[clickedIndex].name}`;

        document.getElementById("questionText").innerText =
        `⭐ Correct! It is ${fruits[clickedIndex].name}!`;

    }
}

function resetCards(){

    const cards =
    document.querySelectorAll(".fruit-card");

    cards.forEach((card,index)=>{

        card.classList.remove("flipped");

        card.innerHTML =
        `${fruits[index].emoji}<br>${fruits[index].name}`;

    });

    hiddenCardIndex = null;

    document.getElementById("questionText").innerText =
    "Look carefully!";
}
