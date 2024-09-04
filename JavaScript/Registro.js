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
        if (!event.target.matches('#dropdownButton')) {
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
        }
    });
    CargarLocalStorage();
});


let listaVehiculos = [];
let slots = [];

function GuardarVehiculoEnLocal() {
    localStorage.setItem("vehiculos", JSON.stringify(listaVehiculos));
    guardarSlotsEnLocalStorage();
}

function guardarSlotsEnLocalStorage() {
    localStorage.setItem('slots', JSON.stringify(slots));
}

function CargarLocalStorage() {
    const vehiclesString = localStorage.getItem("vehiculos");
    if (vehiclesString) {
        listaVehiculos = JSON.parse(vehiclesString);
    } else {
        listaVehiculos = [];
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

const boton = document.querySelector('#Boton');
boton.addEventListener('click', inputdetodo);

function inputdetodo() {
        const plateInputEntrance = document.getElementById("placa");
        const modelInputEntrance = document.getElementById("modelo");
        const slotInputEntrance = document.getElementById("slotInputEntrance");
        const dropdownButton = document.getElementById("dropdownButton");
    
        const expresionRegularVehiculo = /^[A-Za-z]{3}\d{3}$/;
        const expresionRegularSlot = /^A([1-9]|[1-9]\d|50)$/;

        const vehicleType = dropdownButton.textContent === 'Select Type' ? '' : dropdownButton.textContent;
        
        if (
            !plateInputEntrance.value ||
            !modelInputEntrance.value ||
            !slotInputEntrance.value ||
            !vehicleType
        ) {
            return alert("Rellena todos los campos!");
        }
        if (!expresionRegularVehiculo.test(plateInputEntrance.value)) {
            return alert("Placa escrita en el formato incorrecto! (ABC123)");
        }
        if (!expresionRegularSlot.test(slotInputEntrance.value)) {
            return alert("El slot está escrito en un formato incorrecto! (A1-A50)");
        }
    
        const slotDisponible = slots.find(slot => slot.name === slotInputEntrance.value);
    
        if (!slotDisponible) {
            return alert("El slot no existe!");
        }
        if (!slotDisponible.available) {
            return alert("El slot ya ha sido ocupado!");
        }
    
        const placaExistente = listaVehiculos.find(vehicle => vehicle.plate === plateInputEntrance.value);
        if (placaExistente) {
            return alert("La placa ya ha sido registrada!");
        }

        let price;
        switch (vehicleType) {
            case 'Carro':
                price = 3000;
                break;
            case 'Moto':
                price = 1000;
                break;
            case 'Camión':
                price = 6000;
                break;
            default:
                price = 0;
        }
        const newVehicle = {
            plate: plateInputEntrance.value,
            model: modelInputEntrance.value,
            slot: slotInputEntrance.value,
            exit_hour: "",
            price:price,
            type:vehicleType,
            total_cost: 0,
        }
        listaVehiculos.push(newVehicle);
        slotDisponible.available = false;
        GuardarVehiculoEnLocal();
        alert("Entrada registrada exitosamente");

        plateInputEntrance.value = '';
        modelInputEntrance.value = '';
        slotInputEntrance.value = '';
        dropdownButton.textContent = 'Select Type';

}
window.addEventListener('beforeunload', () => {
    GuardarVehiculoEnLocal();
});


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
