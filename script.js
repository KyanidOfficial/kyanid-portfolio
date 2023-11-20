var CloseButton = document.getElementById("closebutton");

CloseButton.addEventListener("click", function() {
    var widget = document.getElementById("widget");
    var body = document.getElementById("body");
        widget.style.display = "none";
        body.style.overflow = "visible";
});

var widgetMain = document.getElementById("widget");
var openButton = document.getElementById("notdone");
var body = document.getElementById("body");

openButton.addEventListener("click", function() {
    widgetMain.style.display = "grid";
    body.style.overflow = "hidden";
});