const jogadores = ["Neymar", "Vini Jr.", "Raphinha"]
let lista = document.getElementById("listaJogadores")

function listarJogadores(){
  lista.innerHTML = "";

  for(let i = 0; i < jogadores.length; i++){
    lista.innerHTML += "<li>" + jogadores[i] + "</li>";
  }
}

