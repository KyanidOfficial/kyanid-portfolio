
/*Widget*/
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

/*Partciles*/
particlesJS("particles-js", 
{
    "particles":
{
    "number":
    {
        "value":20,
        "density":
        {
            "enable":true,
            "value_area":800
}},
"color":
{
    "value":"#fff"
},
"shape":
{
    "type":"circle",
"stroke":
{
    "width":0,"color":"#000000"
},
"polygon":
{
    "nb_sides":5
},
"image":
{
    "src":"img/github.svg",
    "width":100,
    "height":100
}},
"opacity":
{   
    "value":0.5,
    "random":false,
    "anim":
    {
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
}},
"size":
{
    "value":1.5,
    "random":true,
    "anim":
    {
        "enable":false,
        "speed":2,
        "size_min":0.1,
        "sync":false
}},
"line_linked":
{
    "enable":true,
    "distance":30,
    "color":"#ffffff",
    "opacity":0.5,
    "width":0.6
},
"move":
{
    "enable":true,
    "speed":3,
    "direction":"none",
    "random":false,
    "straight":false,
    "out_mode":"out",
    "bounce":false,
    "attract":
    {
        "enable":false,
        "rotateX":600,
        "rotateY":1200
}}},
"interactivity":
{
    "detect_on":"canvas",
    "events":
    {
        "onhover":
        {
            "enable":false,
            "mode":"repulse"
        },
            "onclick":
            {
                "enable":false,
                "mode":"push"
            },
        "resize":false
    },
"modes":
{
    "grab":
    {
        "distance":400,
        "line_linked":
        {
            "opacity":1
        }},
            "bubble":
            {
                "distance":400,
                "size":40,
                "duration":2,
                "opacity":8,
                "speed":3
            },
"repulse":
{
    "distance":200,
    "duration":0.4
},
"push":
{
    "particles_nb":4
},
    "remove":
    {
        "particles_nb":2
}}},
"retina_detect":true
});
var count_particles, stats, update; stats = new Stats; stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); 
update = function() { stats.begin(); 
    stats.end(); 
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
    { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
    requestAnimationFrame(update);}; 
    requestAnimationFrame(update);;