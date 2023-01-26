// Variables -----------------------------------------------------------------------------
const container = document.querySelector('.content'); // Container
const planets = document.querySelectorAll('.content__list-item'); // Planets array

let i = 0;

// Methods ---------------------------------------------------------------------------------
const hide = (element) => element.classList.add('hide')

const show = (element) => element.classList.remove('hide');

const move = (x) => {
    console.log(i)
    if(i+x >= 0 && i+x < planets.length) { // If the index is within the boundaries of array
        hide(planets[i]); // Hide the actual element
        i+=x; // Count +1 or -1
        show(planets[i]); // Show next or previous
    } else if(i+x === planets.length) { // But, if index is out of the boundaries
        hide(planets[i]);
        i = 0; // Reset to zero
        show(planets[i]);
    } else {
        hide(planets[i]);
        i = planets.length-1; // Reset to max
        show(planets[i]);
    }
    
}

//------------------------------------------------------------------------------------------
// Event Listener when click container
//container.addEventListener('click', goNext);

// Event Listener when press arrow keys on window
window.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') move(1);
    else if(event.key === 'ArrowLeft') move(-1);
});

/**
 * Este script deberá modificarse en manipulación del DOM cuando se actualicen los
 * elementos HTML que contienen a los planetas para generarlos a través de la conexión
 * a base de datos.
 */
