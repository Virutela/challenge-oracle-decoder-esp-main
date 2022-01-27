var inputMensajeACodificar = document.querySelector("#input-texto");

var botonCodificar = document.querySelector("#btn-codificar");

           var botonDescoficar = document.querySelector("#btn-descodificar");

var botonCopiar = document.querySelector("#btn-copy");

var inputResultado = document.querySelector("#msg");
inputMensajeACodificar.focus();

function codificar() {
    var mensaje = inputMensajeACodificar.value;

    var intercambio1 = mensaje.replaceAll("e", "enter");

    var intercambio2 = intercambio1.replaceAll("i", "imes");

    var intercambio3 = intercambio2.replaceAll("a", "ai");

    var intercambio4 = intercambio3.replaceAll("u", "ufat");

    var intercambio5 = intercambio4.replaceAll("o", "ober");


    inputResultado.value = intercambio5;

}


function descodificar () {
    var mensaje = inputMensajeACodificar.value;
    
    var intercambio1 = mensaje.replaceAll("enter", "e");

    var intercambio2 = intercambio1.replaceAll("imes", "i");

    var intercambio3 = intercambio2.replaceAll("ai", "a");

    var intercambio4 = intercambio3.replaceAll("ufat", "u");

    var intercambio5 = intercambio4.replaceAll("ober", "o");


    inputResultado.value = intercambio5;
}


function copiarTexto(){
    var resultado = inputResultado.value;
    navigator.clipboard.writeText(resultado);
    inputResultado.select();
}


botonCodificar.onclick = codificar;

botonDescoficar.onclick = descodificar;

botonCopiar.onclick = copiarTexto;


function SoloLetras(e){
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "abcdefghijklmnopqrstuvwxyz";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
    if(key == especiales[i]){
        tecla_especial = true;
        break;
        }
    }
}