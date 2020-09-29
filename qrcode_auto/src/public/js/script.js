let qrcode = select("img");
let intervalo = 20;//em segundos
let repeticao = setInterval(function(){aleatorio()}, intervalo * 1000)

function aleatorio(){
    var cod = fazerCod(5)
    console.log(cod);
    requisicao(cod)
    retornar();
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

function requisicao(cod){
    const body = {
        cod
    };

    fetch("codes/store",{
        method: "POST",
        headers: {
         'content-Type': 'application/json'
         },
        body: JSON.stringify(body)
    })
    .then(async response => {
        const res = await response.json();
        if(response.status == 201){
            return console.log("Erro ao enviar");
        }else{
            return console.log("Sucesso ao enviar");
        }
    })
    .catch(res => {Erro('Não conseguimos cadastrar')})
}

function retornar(){
    fetch("codes/return", { 
        method: 'get'
      })
      .then(async function(response) { 
        response.json().then(json => {
            console.log(json);
            return(json);
        })
      })
      .catch(function(err) { console.error(err); });
}