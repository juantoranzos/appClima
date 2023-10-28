//logica
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '02bee9ebbf6fa52a0615ff13e27d891d';
let difKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})
function fetchDatosClima(ciudad) {

    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
}
function mostrarDatosClima(data) {
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const nombreCiudad = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `El nombre de la ciudad es: ${nombreCiudad}, de ${paisNombre}`
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${parseInt(temperatura - difKelvin)} °C`
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de: ${humedad}%`
    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}.png`
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion es: ${descripcion}`
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}