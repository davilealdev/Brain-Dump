function saudacao(){
    const msgDiv = document.getElementById("greetings")
    let time = new Date();   
     let hora =  time.getHours();
    
    if( hora >= 6 && hora < 12 ){
        msgDiv.innerHTML = `Bom Dia <span style="color: #5e6033;">DAVI</span> !`
    } else if (hora >= 12 &&  hora < 19 ){
        msgDiv.innerHTML = `Boa Tarde <span style="color: #5e6033;">DAVI</span> !`
    } else if (hora >= 19 && hora < 23 ){
        msgDiv.innerHTML = `Boa Noite <span style="color: #5e6033;">DAVI</span> !`
    } else if (hora => 23 && hora <= 5){
        msgDiv.innerHTML = `De Madrugada <span style="color: #5e6033;">DAVI</span> ? `
    }     
}

 saudacao()