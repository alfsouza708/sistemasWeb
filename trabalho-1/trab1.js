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
                retornaImagem(xmlDoc, _indiceDoFilme);  
                var _nomeDoFilme = retornaTitulo(xmlDoc, _indiceDoFilme); 
                retornaAno(xmlDoc, _indiceDoFilme);
                retornaSinopse(xmlDoc, _indiceDoFilme);
                retornaCategoria(xmlDoc, _indiceDoFilme);
                retornaAtores(xmlDoc, _indiceDoFilme); 
                ChamaOFazTudo(_nomeDoFilme);
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
//JA FOI
    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                text = x[i].childNodes[5].innerHTML.substring(17, 21);
                if(text === ano){
                    text = x[i].childNodes[15].innerText.toString();
                    y = text.replace("        ","").split("\n");
                    y = y.filter(o=> o != "" && o != "      ");

                    for(var u = 0;u< y.length;u++){
                        y[u] = y[u].trim().toLowerCase();
                    }

                    if(y.includes(ator)){
                        var teste = [];
                        teste.push(info.toLowerCase());
                        text = x[i].childNodes[7].innerHTML;
                        if(contemInfo(text.toLowerCase(), teste)){
                            arr2.push(i);
                        }
                    }
                }
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
// JA FOI
    if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                text = x[i].childNodes[5].innerHTML.substring(17, 21);
                if(text === ano){
                    text = x[i].childNodes[15].innerText.toString();
                    y = text.replace("        ","").split("\n");
                    y = y.filter(o=> o != "" && o != "      ");

                    for(var u = 0;u< y.length;u++){
                        y[u] = y[u].trim().toLowerCase();
                    }

                    if(y.includes(ator)){
                        arr2.push(i);
                    }
                }
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JA FOI
    if (arr[0] == 1 && arr[1] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                text = x[i].childNodes[5].innerHTML.substring(17, 21);
                if(text === ano){
                    var teste = [];
                    teste.push(info.toLowerCase());
                    text = x[i].childNodes[7].innerHTML;
                    if(contemInfo(text.toLowerCase(), teste)){
                        arr2.push(i);
                    }
                }
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JA FOI
    if (arr[0] == 1 && arr[2] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                text = x[i].childNodes[15].innerText.toString();
                y = text.replace("        ","").split("\n");
                y = y.filter(o=> o != "" && o != "      ");

                for(var u = 0;u< y.length;u++){
                    y[u] = y[u].trim().toLowerCase();
                }

                if(y.includes(ator)){
                    var teste = [];
                    teste.push(info.toLowerCase());
                    text = x[i].childNodes[7].innerHTML;
                    if(contemInfo(text.toLowerCase(), teste)){
                        arr2.push(i);
                    }
                }
            }
            
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

//JA FOI
    if (arr[0] == 1 && arr[1] == 1) {
        for (i = 0; i < x.length; i++) {

            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                text = x[i].childNodes[5].innerHTML.substring(17, 21);
                if(text === ano){
                    arr2.push(i);
                }
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JA FOI
    if (arr[0] == 1 && arr[2] == 1) {
        for (i = 0; i < x.length; i++) {

            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                text = x[i].childNodes[15].innerText.toString();
                y = text.replace("        ","").split("\n");
                y = y.filter(o=> o != "" && o != "      ");

                for(var u = 0;u< y.length;u++){
                    y[u] = y[u].trim().toLowerCase();
                }

                if(y.includes(ator)){
                    arr2.push(i);
                }
            }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JAFOI
    if (arr[0] == 1 && arr[3] == 1) {
        for (i = 0; i < x.length; i++) {

            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                var teste = [];
                teste.push(info.toLowerCase());
                text = x[i].childNodes[7].innerHTML;
                if(contemInfo(text.toLowerCase(), teste)){
                    arr2.push(i);
                }
            }   
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }

    // UTILIZAR ESTE PARA TESTE!!!!!!!!!
    //JA FOI
    if (arr[0] == 1) {        
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[11].innerText.toString();
            var y = text.replace("        ","").split("\n");
            y = y.filter(o=> o != "" && o != "      ");

            for(var u = 0;u< y.length;u++){
                y[u] = y[u].trim().toLowerCase();
            }
            
            if(y.includes(cat)){
                console.log(i);
                arr2.push(i);
            }         
        }     
        //console.log("TAMANHO : " + arr2.length);  
        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JA FOI
    if (arr[1] == 1) {
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[5].innerHTML.substring(17, 21);
            if(text === ano){
                console.log(1);
                arr2.push(i);
            }
        } 

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JA FOI
    if (arr[2] == 1) {
        for (i = 0; i < x.length; i++) {
            text = x[i].childNodes[15].innerText.toString();
                y = text.replace("        ","").split("\n");
                y = y.filter(o=> o != "" && o != "      ");

                for(var u = 0;u< y.length;u++){
                    y[u] = y[u].trim().toLowerCase();
                }

                if(y.includes(ator)){
                    arr2.push(i);
                }
        }

        var indice = arr2[Math.floor(Math.random() * arr2.length)];
        console.log(indice);
        return indice;
    }
//JA FOI
    if (arr[3] == 1) {
        for (i = 0; i < x.length; i++) {
            var teste = [];
            teste.push(info.toLowerCase());
            text = x[i].childNodes[7].innerHTML;
            if(contemInfo(text.toLowerCase(), teste)){
                arr2.push(i);
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

function contemInfo(str, substrings) { //Função que verifica string contida em texto
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return true;
       }
    }
    return false; 
}