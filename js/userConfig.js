// ===== INPUT E EVENTO DE ENTER (SÓ SE EXISTIR) =====
const nameInput = document.getElementById("nameInput");

if (nameInput) {
  nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      saveName();
    }
  });
}

// ===== FUNÇÃO DE SALVAR NOME =====
function saveName() {
  if (!nameInput) return;

  let nomeDigitado = nameInput.value.trim();

  if (nomeDigitado.length > 15) {
    alert("NOME MUITO GRANDE");
    return;
  }

  if (nomeDigitado.length < 3) {
    alert("NOME MUITO CURTO");
    return;
  }

  localStorage.setItem("nomeUsuario", nomeDigitado);

  let msg = document.getElementById("status");
  if (msg) {
    msg.innerHTML = `Belo Nome <span style="color:green;">${nomeDigitado}</span>, Nome Salvo!`;
  }

  saudacao();
}

// ===== CONTADOR DE POSTS =====
let postagens = JSON.parse(localStorage.getItem("posts")) || [];
let count = document.getElementById("topics-counter");
if (count) {
  count.innerText = postagens.length;
}

// ===== SAUDAÇÃO =====
function saudacao() {
  const username = localStorage.getItem("nomeUsuario");
  const msgDiv = document.getElementById("greetings");

  if (!msgDiv) return;

  if (!username) {
    msgDiv.innerHTML = "Bem Vindo!";
    return;
  }

  let hora = new Date().getHours();

  if (hora >= 6 && hora < 12) {
    msgDiv.innerHTML = `Bom Dia <span style="color:#5e6033;">${username}</span> !`;
  } else if (hora >= 12 && hora < 19) {
    msgDiv.innerHTML = `Boa Tarde <span style="color:#5e6033;">${username}</span> !`;
  } else if (hora >= 19 && hora < 23) {
    msgDiv.innerHTML = `Boa Noite <span style="color:#5e6033;">${username}</span> !`;
  } else {
    msgDiv.innerHTML = `Boa Madrugada <span style="color:#5e6033;">${username}</span> 🦉`;
  }
}

// ===== EXECUTA AO CARREGAR =====
saudacao();
