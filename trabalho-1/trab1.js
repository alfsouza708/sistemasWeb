function onLoadDoc() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://leandrojsa.github.io/movies.html";
    var cat_input = document.getElementById("cat_input").value;
    var ano_input = document.getElementById("ano_input").value;
    var ator_input = document.getElementById("ator_input").value;
    var info_input = document.getElementById("info_input").value;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myContext = this.responseText;
            var parser=new DOMParser();
            var xmlDoc=parser.parseFromString(myContext,"text/html");
            if (xmlDoc) {
                var _indiceDoFilme = pesquisaOQ(xmlDoc, cat_input, ano_input, ator_input, info_input);
                //retornaImagem(xmlDoc, _indiceDoFilme);  
                //var _nomeDoFilme = retornaTitulo(xmlDoc, _indiceDoFilme); 
                //retornaAno(xmlDoc, _indiceDoFilme);
                //retornaSinopse(xmlDoc, _indiceDoFilme);
                //retornaCategoria(xmlDoc, _indiceDoFilme);
                //retornaAtores(xmlDoc, _indiceDoFilme); 
                //ChamaOFazTudo(_nomeDoFilme);
                } 
            else {
                document.getElementById("destino").innerHTML = "Não tem filme";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
} 

function pesquisaOQ(xml, cat, ano, ator, info) {
    var i;
    var indice;
    var x = xml.getElementsByTagName("div");
    var arr = [0,0,0,0];
    var arr2 = [];

    
    if (cat != "") {
        arr[0]++;
    }
    if (ano != "") {
        arr[1]++;
    }
    if (ator != "") {
        arr[2]++;
    }
    if (info != "") {
        arr[3]++;
    }

    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (cat.includes(x[i].childNodes[11].innerText)) {
                arr2 += i;
            }
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
        for (i = 0; i < x.length; i++) {
            if (cat.includes(x[i].childNodes[11].innerText)) {
                arr2 += i;
            }
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[0] == 1 && arr[1] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (cat.includes(x[i].childNodes[11].innerText)) {
                arr2 += i;
            }
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[0] == 1 && arr[2] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (cat.includes(x[i].childNodes[11].innerText)) {
                arr2 += i;
            }
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[1] == 1 && arr[2] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[0] == 1 && arr[1] == 1) {
        for (i = 0; i < x.length; i++) {
            if (cat.includes(x[i].childNodes[11].innerText)) {
                arr2 += i;
            }
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[0] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (cat.includes(x[i].childNodes[11].innerText)) {
                arr2 += i;
            }
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[2] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[1] == 1 && arr[2] == 1) {
        for (i = 0; i < x.length; i++) {
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
    // UTILIZAR ESTE PARA TESTE!!!!!!!!!
    if (arr[0] == 1) {
        text = x[0].childNodes[11].innerText.toString();
        console.log(text);
        for (i = 0; i < x.length; i++) {
            if (text.includes(cat)) {
                console.log(i);
                arr2 += i;
            }
        }
        console.log(arr2);
        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[1] == 1) {
        for (i = 0; i < x.length; i++) {
            if (ano.includes(x[i].childNodes[5].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[2] == 1) {
        for (i = 0; i < x.length; i++) {
            if (ator.includes(x[i].childNodes[15].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    if (arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            if (info.includes(x[i].childNodes[7].innerText)) {
                arr2 += i;
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

}

function retornaTitulo(xml, i) {
    var titles = [];
    var x = xml.getElementsByTagName("div");
    console.log(x[9].childNodes);

    titles += "<br>" + x[i].childNodes[3].innerHTML + "<br>";
    
    document.getElementById("destino").innerHTML += titles;

    return x[i].childNodes[3].innerHTML;
}

function retornaAno(xml, i) {
    var anos = [];
    var x = xml.getElementsByTagName("div");
    console.log(x[9].childNodes);

    anos += "<br>" + x[i].childNodes[5].innerHTML + "<br>";
    
    document.getElementById("destino").innerHTML += anos;
}

function retornaImagem(xml, i) {
    var images = [];
    var img = document.createElement("img");
    var x = xml.getElementsByTagName("div");
    var src = document.getElementById("destino");

    images = "https://leandrojsa.github.io/" + x[i].childNodes[1].attributes[0].nodeValue;

    img.src = images;
    src.appendChild(img);
    
}

function retornaCategoria(xml, i) {
    var categories = [];
    var x = xml.getElementsByTagName("div");

    categories += "<br>" + x[i].childNodes[11].innerHTML + "<br>";

    document.getElementById("destino").innerHTML += categories;
}

function retornaSinopse(xml, i) {
    var sinopses = [];
    var x = xml.getElementsByTagName("div");

    sinopses += "<br>" + x[i].childNodes[7].innerHTML + "<br>";
    
    document.getElementById("destino").innerHTML += sinopses;
}

function retornaAtores(xml, i) {
    var atores = [];
    var x = xml.getElementsByTagName("div");

    atores += "<br>" + x[i].childNodes[15].innerHTML + "<br>";

    document.getElementById("destino").innerHTML += atores;
}