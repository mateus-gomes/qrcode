let qrcode = select("img");
let intervalo = 20;//em segundos
let repeticao = setInterval(function(){aleatorio()}, intervalo * 1000)

function aleatorio(){
    var cod = fazerCod(7)
    console.log(cod);
    generateQR(cod)
}

function generateQR(data) {
    let size = "1000x1000"
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

    let url= `${baseURL}?data=${data}&size=${size}`;

    qrcode.src = url;
}

function select(el){
    return document.querySelector(el);
}

function fazerCod(length) {
    var resultado = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < length; i++ ) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
 }

