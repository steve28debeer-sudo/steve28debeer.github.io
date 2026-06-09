function showFruit(name, emoji) {
  const display = document.getElementById("display");

  display.innerHTML = `
    <span class="big-fruit">${emoji}</span>
    <h2>${name}</h2>
    <p>Say it with me: ${name}!</p>
  `;
}