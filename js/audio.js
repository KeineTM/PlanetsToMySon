const animal = document.querySelector('.card__img');
const sfx = new Audio("../assets/animals-sfx/mooing-cow-122255.mp3");

animal.addEventListener("click", () => {
    sfx.play();
});