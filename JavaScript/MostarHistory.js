document.addEventListener('DOMContentLoaded', (event)=>{
    const contenedor = document.getElementById("ContenedorDelLocalStorage");
    contenedor.innerHTML = ''
    const ValoresDeLosVehiculos = localStorage.getItem("vehiculos");
    let dataLocalstorage = JSON.parse(ValoresDeLosVehiculos);
    dataLocalstorage.forEach(valoresDelLocal => {
        const th = document.createElement('tr')
        th.innerHTML = `
        <td>${valoresDelLocal.plate}</td>
        <td>${valoresDelLocal.type}</td>
        <td>${valoresDelLocal.model}</td>
        <td>12:00</td>
        <td>${valoresDelLocal.slot}</td>
        <td><button>exit</button></td>
        `
        contenedor.appendChild(th);
        console.log(valoresDelLocal)
    })
})

const Button = document.addEventListener('click',SacarDelContenedor)
function SacarDelContenedor(){
    
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




