// Your code here!
'use strict';
var keystrokes = '';
var x = document.createElement("CANVAS");
x.id = 'Canvas';
var ctx = x.getContext("2d");
//functions
function showData(data) {
    console.log(data[0].title);
    document.getElementById("title").innerHTML = data[0].title;
    document.getElementById("story").innerHTML = data[0].story;
}
//document.getElementById("test").innerHTML = "Page location is " + window.location.pathname;
function setbackground(component, backgroundlocation) {
    component.body.style.background = backgroundlocation;
    component.body.style.backgroundPosition = 'center';
    component.body.style.backgroundRepeat = 'no-repeat';
    component.body.style.backgroundSize = 'cover';
}
function keyDownTextField(e) {
    //var keyCode = e.keyCode;
    console.log(e);
    keystrokes += e.char;
    if (e.keyCode == 13) { keystrokes = "";}
    
}
function myClickHandler() {
    var elem = document.getElementById('starwars');
    if (elem != null) {  
        elem.parentNode.removeChild(elem);  
    }
    var ele = document.getElementById('Canvas');
    if (ele == null) {
        //x = document.createElement("CANVAS");
        //x.id = 'Canvas';
        document.body.appendChild(x);
        //ctx = x.getContext("2d");
    }

    startGame();
    //elem != null ? elem.parentNode.removeChild(elem) : "";
}
//this.document.
//setbackground(this.document, "url('../images/space1.jpg')");
flexData('story.json', showData);
document.addEventListener("keydown", keyDownTextField, false);

document.onclick = myClickHandler;

function createStartScreen() {
    
}

// create a canvas with 3 menu items able to go up and down
function startGame() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.style.background = 'yellow';
    ctx.font = "100px Arial";
    ctx.fillText(keystrokes, 0, 100);

    init();
}
//function myFunction() {
//    setTimeout(function () { repeating(); }, 500);
//}
////myFunction();
//function repeating() {
//    ctx.beginPath();
//    ctx.fillText(keystrokes, 0, 100);
//    ctx.closePath();
//    wordMove();
//    myFunction();
//}


var step = 0, steps = 0, delay = 20;
var wordss = ['words', 'test'];
var wor = wordss[0];
function showWords(words) {
    x.height = x.height;
    step= step + 5;
    ctx.font = "100px Arial";
    ctx.fillText(keystrokes, 0, 100);
    //ctx.clearRect(0, 0, x.width, x.height);
    ctx.save();
    ctx.translate(x.width / 2, step);
    ctx.fillText(wor, 2, 2);
    ctx.restore();
    if (step >= steps) {
        step = 0;
        wor == wordss[0] ? wor = wordss[1] : wor = wordss[0];
    }
    if (step <= steps) {
        setTimeout('RunTextRightToLeft()', delay);
      
    }
}
//requestAnimationFrame(); 
function init() {
    ctx.fillStyle = "blue";
    ctx.font = "20pt Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    step = 0;
    steps = x.height + 50;
    RunTextRightToLeft();
    
}

