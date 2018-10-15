function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    var text, parser, xmlDoc;
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            text = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=1&search=" + document.getElementById("textInput") + "&format=xml", false);
    xmlhttp.send();

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");

    document.getElementById("search").innerHTML = xmlDoc.getElementsByTagName()[0].childNodes[0].nodeValue;
}



