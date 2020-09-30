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