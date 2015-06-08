// JavaScript Document
$(document).ready(function(e) {
// watchID se refiere a la aceleracion 'actual'

var watchID = null;
document.addEventListener("deviceready",Dispositivo_Listo, false);

// Cuando esta listo el dispositivo
function Dispositivo_Listo() {
Comienza();
}

// Empieza la 'observacion' de la aceleracion
function Comienza() {

//Actualiza la aceleracion cada 2 segundos
//
var opciones = { frequency: 2000 };

watchID = navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
navigator.geolocalizacion.getCurrentPosition(Localiza, ErrorLocalizacion);
}
// Detiene la 'observacion' de la aceleracion

function Detente() {
if (wathID) {
navigator.accelerometer.clearWatch(watchID);
watchID = null;
}
}

//Correcto: Toma una captura de la aceleracion
function Correcto (aceleration) {
var element = document.getElementById('acelerometro');

element.innerHTML = 'Aceleration en X: ' + acceleration.x + '<br />' +
                    'Aceleration en Y: ' + acceleration.y + '<br />' +
                    'Aceleration en Z: ' + acceleration.z + '<br />' +
                    'Intervalo: '      + acceleration.timestamp + '<br />' ;
}

// Error: Falla al obtener la acelaracion
function Error() {
alert('Error!');
}
//Exito al localizar
function Localiza(posicion) {
var element = document.getElementById('geolocalizacion');
element.innerHTML = 'Latitud: '          + posicion.coords.latitude      + '<br />' +
                    'Longitud: '         + posicion.coords.longitude     + '<br />' +
                    'Altitud: '          +posicion.coords.altitude      + '<br />' +
                    'Precision: '         +posicion.coords.accuracy     + '<br />' +
                    'Precision de Altitud:'  +posicion.coords.altitudeAccuracy
+ '<br />' +
                    'Direccion: '            +posicion.coords.heading
+ '<br />' +
                    'Velocidad: '         +posicion.coords.speed
+ '<br />' +
                    'Intervalo: '         +posicion.timestamp     +
'<br />';
}

//Error en la geolocalizaion
function ErrorLocalizacion(error) {
alert('codigo: ' +error.code + '\n'+
'mensaje:'+error.message + '\n');
}
});//documento ready