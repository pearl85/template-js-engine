var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var xhttpx = new XMLHttpRequest();
        xhttpx.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("starwars-container").innerHTML = TemplateEngine(this.responseText, data);
            };
        };
        xhttpx.open("GET", "film-directive.html", true);
        xhttpx.send();
    };
};

xhttp.open("GET", "https://swapi.co/api/films/", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();
