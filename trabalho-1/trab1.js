
function onLoadDoc() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://leandrojsa.github.io/movies.html";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myContent = this.responseText;
            t = "";
            console.log("ENTROU PORA");
            /*t = $(myContent).find('#id');
            alert(t[0].html());*/

            document.getElementById("destino").innerHTML = myContent;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}