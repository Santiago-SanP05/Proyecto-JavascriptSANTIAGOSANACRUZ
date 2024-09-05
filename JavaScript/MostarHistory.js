let listaVehiculos = [];
let slots = [];
let Historial = [];


document.addEventListener('DOMContentLoaded', (event)=>{
    MostrarHistorial();
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
        <td>${valoresDelLocal.entraceHour}</td>
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
function guardarHistorialLocal(){
    localStorage.setItem('historial', JSON.stringify(Historial))
}

function GuardarVehiculoEnLocal() {
    localStorage.setItem("vehiculos", JSON.stringify(listaVehiculos));
    guardarSlotsEnLocalStorage();
}
function CargarDatosHistorial(){
    const History = localStorage.getItem('historial');
    if (History) {
        Historial = JSON.parse(history);
    } else {
        Historial = [];
    }
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
function parseTimeString(timeString) {
    const [hora, minuto, segundo] = timeString.split(':').map(Number);
    return { hora, minuto, segundo };
}

function salida(placa, lots) {
    const vehiculo = listaVehiculos.find(v => v.plate === placa);
    const lote = slots.find(v => v.name === lots);
    if (vehiculo){
        const index = listaVehiculos.indexOf(vehiculo);
        let eliminado = listaVehiculos.splice(index, 1);
        console.log(listaVehiculos);
        const ahora = new Date();

        const horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const segundos = ahora.getSeconds();

        const horaFormateada = horas.toString().padStart(2, '0');
        const minutoFormateado = minutos.toString().padStart(2, '0');
        const segundoFormateado = segundos.toString().padStart(2, '0');

        let hora = `${horaFormateada}:${minutoFormateado}:${segundoFormateado}`
        eliminado[0].exit_hour = hora;
        let presio = eliminado[0].price;
        let horaInicialString = eliminado[0].entraceHour;
        let horaFinalString = hora;
        const horaInicial = new Date();
        const horaFinal = new Date();
        console.log(typeof(horaInicialString))
        console.log(typeof(horaFinalString))
        const { hora: horaInicialH, minuto: minutoInicial, segundo: segundoInicial } = parseTimeString(horaInicialString);
        const { hora: horaFinalH, minuto: minutoFinal, segundo: segundoFinal } = parseTimeString(horaFinalString);

        horaInicial.setHours(horaInicialH, minutoInicial, segundoInicial);
        horaFinal.setHours(horaFinalH, minutoFinal, segundoFinal);

        const diferenciaEnMilisegundos = horaFinal - horaInicial;

        const diferenciaEnSegundos = Math.floor(diferenciaEnMilisegundos / 1000);
        const Valorminutos = Math.floor((diferenciaEnSegundos % 3600) / 60);
        let costoFinal = Valorminutos * presio;
        eliminado[0].totalM = Valorminutos
        eliminado[0].total_cost = costoFinal;
        Historial.push(eliminado[0])
        guardarHistorialLocal();
        GuardarVehiculoEnLocal()
    };
    if (lote){
        const index = slots.indexOf(lote)
        slots[index].available = true
        console.log(index)
        guardarSlotsEnLocalStorage();
    };
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
    HijoContenedorPadre.innerHTML=`
    <table class="ContainHistory">
    <thead>
        <th>Placa</th>
        <th>Tipo de vehiculo</th>
        <th>Modelo</th>
        <th>Hora Entrada</th>
        <th>Hora Salida</th>
        <th>Precio Por vehiculo</th>
        <th>Total de Minutos</th>
        <th>costo Final</th>
        
    </thead>
    <tbody id="ContenedorDelHistory">
    </tbody>
</table>`
    ContenedorPadre.appendChild(HijoContenedorPadre);
    console.log(Historial)
    ContenedorPadre.appendChild(HijoContenedorPadre);
    console.log(ContenedorDelHistory)
    const Hist = localStorage.getItem('historial')
    const His = JSON.parse(Hist)
    console.log(His)
    HistorialMostar(His);
}



function HistorialMostar(ListaDelHistori){
    const ContenedorDelHistory = document.getElementById('ContenedorDelHistory');
    ListaDelHistori.forEach(Valores => {
        const th = document.createElement('tr')
        th.innerHTML = `
        <td>${Valores.plate}</td>
        <td>${Valores.type}</td>
        <td>${Valores.model}</td>
        <td>${Valores.entraceHour}</td>
        <td>${Valores.exit_hour}</td>
        <td>${Valores.price}</td>
        <td>${Valores.totalM}</td>
        <td>${Valores.total_cost}</td>
        `;
        ContenedorDelHistory.appendChild(th)
    })
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




