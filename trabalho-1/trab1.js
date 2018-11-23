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
            
            if (myContext) {
                //retornaImagem(myContext);  
                retornaTitulo(myContext); 
                retornaSinopse(myContext);
                retornaCategoria(myContext);
                retornaAtores(myContext); 
            }
        
            else {
                document.getElementById("destino").innerHTML = "Não tem filme";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
} 

function retornaTitulo(xml) {
    var i;
    var titles = [];
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/html");
    var x = xmlDoc.getElementsByTagName("div");
    console.log(x[9].childNodes);

    titles += "<br>" + x[0].childNodes[3].innerHTML + "<br>";
    
    document.getElementById("destino").innerHTML += titles;
}

function retornaImagem(xml) {
    var i;
    var images = [];
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/html");
    var x = xmlDoc.getElementsByTagName("div");

    images += x[0].childNodes[1].nodeValue + "<br>";
    
    document.getElementById("destino").innerHTML += images;
}

function retornaCategoria(xml) {
    var i;
    var categories = [];
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/html");
    var x = xmlDoc.getElementsByTagName("div");

    categories += "<br>" + x[0].childNodes[11].innerHTML + "<br>";

    document.getElementById("destino").innerHTML += categories;
}

function retornaSinopse(xml) {
    var i;
    var sinopses = [];
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/html");
    var x = xmlDoc.getElementsByTagName("div");

    sinopses += "<br>" + x[0].childNodes[7].innerHTML + "<br>";
    
    document.getElementById("destino").innerHTML += sinopses;
}

function retornaAtores(xml) {
    var i;
    var atores = [];
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/html");
    var x = xmlDoc.getElementsByTagName("div");

    atores += "<br>" + x[0].childNodes[15].innerHTML + "<br>";

    document.getElementById("destino").innerHTML += atores;
}