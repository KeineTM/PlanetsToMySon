// Variables
const container = document.querySelector('.content'); // Container
const planets = document.querySelectorAll('.content__list-item'); // Planets array
let i = 0;

// Methods
const hide = (element) => {
    element.classList.add('hide');
}

const show = (element) => {
    element.classList.remove('hide');
}

// Event Listener when click container
container.addEventListener("click", () => {
    if(planets[i].nextElementSibling) { // If the element have next in array
        hide(planets[i]); // Hide the actual element
        show(planets[i].nextElementSibling); // Show next
        i++; // Count +1
    } else {
        hide(planets[i]); // Hide the actual element
        i = 0; // Reset count
        show(planets[i]); // Show new actual element
    }
});

/**
 * Este script deberá modificarse en manipulación del DOM cuando se actualicen los
 * elementos HTML que contienen a los planetas para generarlos a través de la conexión
 * a base de datos.
 */
