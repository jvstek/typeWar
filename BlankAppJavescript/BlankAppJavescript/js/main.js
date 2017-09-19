// Your code here!

//var w = new Word();
// letter list 

function Start() {
    //flexData('info/colorCode.json', createLetterList);
    
    //var x = document.createElement("strong");
    
    //t.letterElement("tete");
    //t.letterElement("dddddd");
    //x.setAttribute("id", "test");
    //x.style.color = "green";
    //x.innerText = "dsalgf";

    //var x = new Letter("a", "green");
    var t = document.getElementById("wordTest");
    //t.appendChild(x.letterElement("tete"));

    var a = new Letter("a", "green");
    var b = new Letter("b", "red");
    var c = new Letter("c", "blue");
    var letterList = new Array(a,b,c);
    var word = new Word('abc', letterList, 1);
    //word.GetWordElement();
    t.appendChild(word.GetWordElement());
}


function createLetterList(data) {console.log("test");
    console.log(data[0]);
    var te = data[0].letters.length;
    console.log(te);
    var v;
    var letterList = Array(data[0].letters.length);
    for (var i = 0; i < data[0].letters.length; i++) {
        //console.log(data[0].letters[i].color);
        //console.log(data[0].letters[i].letter);
        var lett = data[0].letters[i].letter;
        var col = data[0].letters[i].color;
        v = new Letter(lett,col);
        letterList[i] = v;
    }

    flexData('info/words.json', createWordWithLetters,letterList);
    
}
function createWordWithLetters(data,info) {
    console.log(info);
    console.log(data[0].words);
    var wordList = Array(data[0].words.length);
    var wordElementList = Array(data[0].words.length);
    for (var i = 0; i < data[0].words.length; i++) {
        console.log(data[0].words[i]);
        var wordInLetters = Array(data[0].words[i].length)
        for (var g = 0; g < data[0].words[0].length; g++) {
            var wo = data[0].words[i];
            console.log(wo[g]);
            var te = wo[g];
            // var y = info.find((te) => { return this.character == te ? this : ""; });
            wordInLetters[g] = findLetter(info,te);
            //console.log(y);
        }
        
        wordElementList[i] = new Word(wordInLetters, i);
        //letterList[i] = v;
    }
    showWord(wordElementList);
}
function findLetter(list, letter) {
    var t = "";
    for (var i = 0; i < list.length; i++) {
        list[i].character == letter ? t = list[i] : "";
    }
    return t;
    //console.log(t);
}

function showWord(wordElementList) {
    var v = document.getElementById("wordTest");
    console.log(wordElementList[0].location);
    console.log(wordElementList[0].alive);
    var w = wordElementList[0];
    console.log(w.location);
    console.log(w.alive);
    w.showWord(v);//showWord
    //Word t = new{te,t}; 
}
var keystrokes = '';
var x = document.createElement("CANVAS");
x.id = 'Canvas';
var ctx = x.getContext("2d");
//functions
function showData(data) {
    console.log(data[0].title);
    console.log(data[0].title);
    document.getElementById("title").innerHTML = data[0].title;
    document.getElementById("story").innerHTML = data[0].story;

     
}

function setbackground(component, backgroundlocation) {
    component.body.style.background = backgroundlocation;
    component.body.style.backgroundPosition = 'center';
    component.body.style.backgroundRepeat = 'no-repeat';
    component.body.style.backgroundSize = 'cover';
}


function keyDownTextField(e) {
    console.log(e);
    keystrokes += e.char;
    if (e.keyCode == 13) { keystrokes = "";}
    
}
function myClickHandler() {
    var elem = document.getElementById('starwars');
    if (elem != null) {  
        elem.parentNode.removeChild(elem);  
    }
    Start();
    //var ele = document.getElementById('Canvas');
    //if (ele == null) {
    //    document.body.appendChild(x);
   
    //}

    //CanvasMaker();
}

flexData('info/story.json', showData);

document.addEventListener("keydown", keyDownTextField, false);

document.onclick = myClickHandler;

function createStartScreen() {
    
}


function CanvasMaker() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.style.background = 'yellow';
    ctx.font = "100px Arial";
    ctx.fillText(keystrokes, 0, 100);

    //init();
}


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
    //RunTextRightToLeft();
    
}

