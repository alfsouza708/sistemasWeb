function onLoadDoc() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://leandrojsa.github.io/movies.html";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myContext = this.responseText;

            console.log("ENTROU");
            
            if (myContext) {
                console.log("ENTROU2");
                retornaTitulo(myContext);                
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
    var titles;
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/html");
    var x = xmlDoc.getElementsByTagName("div");

    for(i = 0; i <= 2; i++) {
        console.log(x);
        titles += "<br>" + x[i].childNodes[3].innerHTML;
    }
    document.getElementById("destino").innerHTML = titles;
}