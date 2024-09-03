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

function GuardarVehiculoEnLocal() {
    localStorage.setItem("vehiculos", JSON.stringify(listaVehiculos));
    guardarSlotsEnLocalStorage();
};

function guardarSlotsEnLocalStorage() {
    localStorage.setItem('slots', JSON.stringify(slots));
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

function obtenerSlotsDesdeLocalStorage() {
    const slotsData = localStorage.getItem('slots');
    if (slotsData) {
        return JSON.parse(slotsData);
    } else {
        const initialSlots = Array.from({length: 50}, (_, i) => ({
            name: `A${i + 1}`,
            available: true
        }));
        localStorage.setItem('slots', JSON.stringify(initialSlots));
        return initialSlots;
    }
}

/*---------------------------------------------------------------------------------*/

const boton = document.querySelector('#Boton')
boton.addEventListener('click', Mostar)
function Mostar(){
    console.log('hola hola')
}



/*
const preciona = document.getElementById('RegistrarBoton')
preciona.addEventListener('click', mostrarValor)

function mostrarValor() {
    // Obtener el elemento
    const algo = document.querySelector('.algo')
    const rr = document.createElement('h1')
    algo.innerHTML = ''
    var valor = input.value;
    rr.innerHTML = `hola` 
    algo.appendChild(rr)
}

        const preciona = document.getElementById('preciona')
        preciona.addEventListener('click', mostrarValor)


        function mostrarValor() {
            // Obtener el elemento
            const algo = document.querySelector('.algo')
            var input = document.getElementById("miInput");
            const rr = document.createElement('h1')
            // Obtener el valor del input
            algo.innerHTML = ''
            var valor = input.value;
            rr.innerHTML = `${valor}` 
            algo.appendChild(rr)
            

*/