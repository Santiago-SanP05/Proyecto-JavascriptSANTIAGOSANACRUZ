var listaVehiculos = []
let slots = [];

document.addEventListener('DOMContentLoaded', (event)=>{
    MostrarHistorial()
})


 function MostrarHistorial(){
    const contenedor = document.getElementById("ContenedorDelLocalStorage");
    contenedor.innerHTML = ''
    CargarDatosDelLocal();
    listaVehiculos.forEach(valoresDelLocal => {
        const th = document.createElement('tr')
        th.innerHTML = `
        <td class=>${valoresDelLocal.plate}</td>
        <td>${valoresDelLocal.type}</td>
        <td>${valoresDelLocal.model}</td>
        <td>12:00</td>
        <td>${valoresDelLocal.slot}</td>
        <td><button onclick="salida('${valoresDelLocal.plate}')">exit</button></td>
        `
        contenedor.appendChild(th);
        console.log("a",valoresDelLocal)
    })
 }


//_____________________________//
//GUARDAR-DAtOS-----CARGA-----ODTENCION-DAtOS//

function guardarSlotsEnLocalStorage() {
    localStorage.setItem('slots', JSON.stringify(slots));
}


function CargarDatosDelLocal(){
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


//FIN DE ODTENCION, CARGA Y GUARDA

const Button = document.addEventListener('click',SacarDelContenedor)


function salida(placa){
    const vehiculos = JSON.parse(localStorage.getItem('vehiculos'));
    const vehiculo = vehiculos.find(v => v.plate === placa);
    if (vehiculo){
        const index = vehiculos.indexOf(vehiculo);
        if (index > -1) vehiculo.splice(index, 1);
        localStorage.setItem('vehiculos', JSON.stringify())
    }
}


        /*
        exit_hour
        
                contenedor.innerHTML = `
    <tr>
        <td>${valoresDelLocal.plate}</td>
        <td>${valoresDelLocal.type}</td>
        <td>${valoresDelLocal.model}</td>
        <td>12:00</td>
        <td>${valoresDelLocal.slot}</td>
        <td><button>exit</button></td>
    </tr>
        `*/




