document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('dropdownButton');
    const content = document.getElementById('dropdownContent');

    button.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    content.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            button.textContent = event.target.textContent;
            content.style.display = 'none';
        }
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-button')) {
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
        }
    });
});

let listaVehiculos = []
let slots = []

/*------------------------------------------------------------------------------------ */
//--FUNCIONES DE GUARDADO :) Reutilizables--//


function guardarSlotsEnLocalStorage() {
    localStorage.setItem('slots', JSON.stringify(slots));
};

function GuardarEnLocal() {
    localStorage.setItem("vehiculos", JSON.stringify(listaVehiculos));
    GuardarEnLocal();
};

/*------------------------------------------------------------------------------------ */

function cargarlLocalStorage() {
    const vehiclesString = localStorage.getItem("vehicles");
    if (vehiclesString) {
        vehicles = JSON.parse(vehiclesString);
    } else {
        vehicles = [];
    }
    slots = obtenerSlotsDesdeLocalStorage();
}
