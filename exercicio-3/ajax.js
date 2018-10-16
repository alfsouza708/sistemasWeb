function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    var text = document.getElementById("textInput").value;
    //var parser, xmlDoc;

    console.log(text);

    xmlhttp.onreadystatechange = function() { 
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlhttp.responseText, "text/xml");
            if (xmlDoc.getElementsByTagName("Description")[0]) {
                document.getElementById("search1").innerHTML = xmlDoc.getElementsByTagName("Text")[0].innerHTML;

                document.getElementById("search2").innerHTML = xmlDoc.getElementsByTagName("Description")[0].innerHTML;

                document.getElementById("search3").innerHTML = xmlDoc.getElementsByTagName("Url")[0].innerHTML;

                document.getElementById("search3").setAttribute('href',xmlDoc.getElementsByTagName("Url")[0].innerHTML);
            }
            else {
                document.getElementById("search1").innerHTML = "Não tem resultados para a pesquisa.";
            }
        }
    }

    xmlhttp.open("GET", "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=1&search=<" + text + ">&format=xml", true);
    xmlhttp.send();
    console.log(text);
}