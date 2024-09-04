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
        <td>${valoresDelLocal.plate}</td>
        <td>${valoresDelLocal.type}</td>
        <td>${valoresDelLocal.model}</td>
        <td>12:00</td>
        <td>${valoresDelLocal.slot}</td>
        <td>
            <button onclick="salida('${valoresDelLocal.plate}', '${valoresDelLocal.slot}')">exit</button>
        </td>
    `;
        contenedor.appendChild(th);
    })
 }


//_____________________________//
//GUARDAR-DAtOS-----CARGA-----ODTENCION-DAtOS//

function guardarSlotsEnLocalStorage() {
    localStorage.setItem('slots', JSON.stringify(slots));
}

function GuardarVehiculoEnLocal() {
    localStorage.setItem("vehiculos", JSON.stringify(listaVehiculos));
    guardarSlotsEnLocalStorage();
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


function salida(placa, lots) {
    const vehiculo = listaVehiculos.find(v => v.plate === placa);
    const lote = slots.find(v => v.name === lots);
    if (vehiculo){
        const index = listaVehiculos.indexOf(vehiculo);
        listaVehiculos.splice(index, 1);
        console.log(listaVehiculos);
        GuardarVehiculoEnLocal()
    };
    if (lote){
        const index = slots.indexOf(lote)
        slots[index].available = true
        console.log(index)
        guardarSlotsEnLocalStorage();
    };
    ;
    MostrarHistorial();




} 
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//----------------------------------------------------------------//
//misma page otra contenedor//
let CambioDePagina = document.getElementById('CambioDePagina')
CambioDePagina.addEventListener('click', MuestraHistorial);
function MuestraHistorial(){
    const ContenedorPadre = document.getElementById('ContenedorPadre');
    const HijoContenedorPadre = document.createElement('div');
    HijoContenedorPadre.id = 'Bigcontenedor'
    ContenedorPadre.innerHTML = '';
    ContenedorPadre.appendChild(HijoContenedorPadre)



}





























/*function salida(placa, lots) {
    // Recuperar datos de localStorage
    const vehiculos = JSON.parse(localStorage.getItem('vehiculos'));
    const slots = JSON.parse(localStorage.getItem('slots')); // Asegúrate de tener esta entrada en localStorage

    // Buscar el vehículo y el slot en los datos recuperados
    const vehiculo = vehiculos.find(v => v.plate === placa);
    const lote = slots.find(v => v.slot === lots);

    // Mostrar resultados en la consola
    console.log(vehiculo);
    console.log(lote);
} */
        /*    console.log(vehiculo);
    console.log(lote);
        //______________-------------------------------------|
            if (vehiculo){
        const index = listaVehiculos.indexOf(vehiculo);
        listaVehiculos.splice(index, 1);
        console.log(listaVehiculos)
            GuardarVehiculoEnLocal()
    MostrarHistorial()
    CargarDatosDelLocal()
    console.log(slots)
    }
        //________sirve--------------------------------------|
    if (vehiculo){
        const index = listaVehiculos.indexOf(vehiculo);
        if (index > -1) vehiculo.splice(index, 1);
        localStorage.setItem('vehiculos', JSON.stringify())
    }
}

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
        `
        
        
        
        
        
        
        
        
        
            if (lote){
        const index = slots.indexOf(lote)
        slots[index].available = true
        console.log(index)
    };


    guardarSlotsEnLocalStorage();
    MostrarHistorial();
    CargarDatosDelLocal();
        
        
        
        
        */




