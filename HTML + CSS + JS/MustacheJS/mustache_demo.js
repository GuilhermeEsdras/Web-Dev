// var template = document.getElementById("template");
var template = "<h1>Hello {{firstName}} {{lastName}}!</h1>";

var data = {
    firstName: "Guilherme",
    lastName: "Esdras"
}

var html = Mustache.render(template, data);

var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);