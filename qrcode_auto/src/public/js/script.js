let qrcode = select("img");
let intervalo = 50;//em segundos
let repeticao = setInterval(function(){aleatorio()}, intervalo * 1000)
let verificacao = setInterval(function(){retornar()}, intervalo * 100)
var resultado = '';

function select(el){
    return document.querySelector(el);
}

function aleatorio(){
    var cod = fazerCod(5)
    console.log(cod);
    generateQR(cod)
}

function generateQR(data) {
    let size = "1000x1000"
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

    let url= `${baseURL}?data=${data}&size=${size}`;

    qrcode.src = url;
}

function fazerCod(length) {
    resultado = ''
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < length; i++ ) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}

function retornar(){
    fetch("codes/return", { 
        method: 'get'
      })
      .then(async function(response) { 
        response.json().then(json =>{
            let obj = JSON.parse(json)
            console.log("Resultado:" + resultado);
            console.log("Codigo:" + obj.code);
            if(obj.code == resultado){
                alert("Autenticado com sucesso");
            }else{
                console.log("Não autenticado")
            }
        })
      })
      .catch(function(err) { console.error(err); });
}