
function saveName(){
    let nameInput = document.getElementById("nameInput");
    let nomeDigitado = nameInput.value.trim();

    if(nomeDigitado.length > 15){
        alert("NOME MUITO GRANDE")
    } else if (nomeDigitado.length < 3){
        alert("NOME MUITO CURTO")
    }
    else{

    localStorage.setItem("nomeUsuario", nomeDigitado )
    let msg = document.getElementById("status")
    msg.innerHTML = `Belo Nome <span>${nomeDigitado}</span>, Nome Salvo!`
    }
}



function saudacao(){
    
    const username = localStorage.getItem("nomeUsuario")
    const msgDiv = document.getElementById("greetings")

    if(username === null){
        msgDiv.innerHTML = `Bem Vindo!`
    } else{

 
    let time = new Date();   
    let hora =  time.getHours();
    
    if( hora >= 6 && hora < 12 ){
        msgDiv.innerHTML = `Bom Dia <span style="color: #5e6033;">${username}</span> !`
    } else if (hora >= 12 &&  hora < 19 ){
        msgDiv.innerHTML = `Boa Tarde <span style="color: #5e6033;">${username}</span> !`
    } else if (hora >= 19 && hora < 23 ){
        msgDiv.innerHTML = `Boa Noite <span style="color: #5e6033;">${username}</span> !`
    } else if (hora => 23 && hora <= 5){
        msgDiv.innerHTML = `Boa Madrugada <span style="color: #5e6033;">${username}</span> 🦉 `
    }
    
}
}

saudacao()
