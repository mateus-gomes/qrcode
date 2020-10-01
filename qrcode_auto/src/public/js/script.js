let qrcode = select("img");
let intervalo = 50;//em segundos
var resultado = '';
let repeticao;
let verificacao;

function select(el){
    return document.querySelector(el);
}

function aleatorio(){
    var cod = fazerCod(5)
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
        if(response.length == null){
            console.log("Banco vazio");
        }else{
            response.json().then(json =>{
                let obj = JSON.parse(json)
                if(obj.code == resultado){
                    window.location.href = '/etapa2.html'
                }else{
                    console.log("Não autenticado")
                }
            })
        }
      })
      .catch(function(err) { console.error(err); });
}

function logar(){
    let login = document.getElementById("login");
    let senha = document.getElementById("senha");
    let sectionQr = document.getElementById("sectionQrCode");
    let sectionLogin = document.getElementById("sectionLogin");
    if(login.value == "email" && senha.value == "senha"){
        sectionQr.style.display = 'block';
        sectionLogin.style.display = 'none';
        aleatorio()
        repeticao = setInterval(function(){aleatorio()}, intervalo * 1000)
        verificacao = setInterval(function(){retornar()}, intervalo * 100)
    }else{
        alert("Login incorreto");
    }
}