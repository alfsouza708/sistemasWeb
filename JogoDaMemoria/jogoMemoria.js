var ultimo_jogador="O";
function joga(indice){
    var celulas = document.querySelectorAll("td");
    if (celulas[indice].innerHTML === ""){
        if (ultimo_jogador === "O"){
            celulas[indice].innerHTML = "X";
            ultimo_jogador="X";
        }else{
            celulas[indice].innerHTML = "O";
            ultimo_jogador="O";
        }
        if(verifica(indice)){
            alert("Venceu");
            location.reload();
        }
    }
}

function verifica(indice){
    var celulas = document.querySelectorAll("td");
    var classes = celulas[indice].getAttribute("class");
    classes = classes.split(" ");
    retorno=false;
    classes.forEach(classe=> {
        var elementos = document.getElementsByClassName(classe);
        if(elementos[0].innerHTML === elementos[1].innerHTML &&
          elementos[1].innerHTML === elementos[2].innerHTML){
            retorno=true;   
        }
    });
    return(retorno);
}










