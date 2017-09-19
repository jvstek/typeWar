// Your code here!

// levels invoeren? 

//var w = new Word();
// letter list 
var typing = document.getElementById("typing");
var wordTest = document.getElementById("wordTest");
var score = document.getElementById("score");
var keystrokes = "";
var activeWord = "";
var activeLetterLocation = 0;
var activeWordLocation = 0;
var gameScore = 0;
var wordList;
var letterCodeList;
var gameWordList = [];
var alive = true;
var show = true;
//** init todo **//
typing.innerText = keystrokes;
score.innerText = score;
// to do set first word (should be in the init)
//** events **//
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    //console.log(e);
    keystrokes += e.char;
    if (e.keyCode == 13) { Start(); removeStarWarsTekst();}
    if (alive) {

        activeWord[activeLetterLocation] == e.char ? matchingLetter() : noMatchLetter()

        refresh();
    }
    // what te doen wanneer je klaar bent?? 
    // effects? 
}
function matchingLetter() {

    // ad score
    gameScore++;

    activeLetterLocation += 1;//todo
    // check last letter
    gameWordList[activeWordLocation].ChangeLetterStyle();
    activeWord.length <= activeLetterLocation ? nextWord() : "";

    //refresh();
}
function noMatchLetter() {
    gameScore = gameScore - ((activeLetterLocation * 2) + 1);//todo
    gameWordList[activeWordLocation].reset();
    resetSettings();
}

function refresh() {
    typing.innerText = keystrokes;
    score.innerText = gameScore;
}
function nextWord() {
    gameScore = gameScore + activeLetterLocation;
    removePreviousWord();
    activeWordLocation++;

    // check last word
    wordList.length == activeWordLocation ? done() : setWord();

    resetSettings();
}

function resetSettings() {
    keystrokes = "";
    activeLetterLocation = 0;

}
function setWord() {
    // next word in the list
    activeWord = wordList[activeWordLocation];
    // ad next word to screen 
    wordTest.appendChild(gameWordList[activeWordLocation].GetWordElement());
}
function done() { alive = false; }
function removePreviousWord() {
    var g = document.getElementById(wordList[activeWordLocation]);
    // wordTest.removeChild(wordList[activeWordLocation]);
    wordTest.removeChild(g);
    // frameid.parentNode.removeChild(frameid);
    //var g = document.get
}
loadingData();
function loadingData() {

    var p1 = flexData('info/words.json', fillWordList);

    function fillWordList(data) {
        //console.log(data[0].words);
        wordList = data[0].words;
        //    return data[0].words;

    }
    var p2 = flexData('info/colorCode.json', fillLetterList);
    function fillLetterList(data) {
        //console.log(data[0]);
        letterCodeList = data[0].letters;
    }
    Promise.all([p1, p2]).then(function (a) {
        //console.log(a);
        createGameWords();
    });

}

function createGameWords() {
    //return new Promise(function (resolve, error) {
    //var list = [];


    wordList.forEach(function (wfl, index) {
        console.log(wfl);
        var letterList = [];
        for (var i = 0; i < wfl.length; i++) {
            letterList[i] = createLetterElement(getColor(wfl[i], letterCodeList));
        }
        //var t = new Word('test', 'letters', 0);
        var w = new Word(wfl, letterList, index);
        gameWordList[index] = w;
    })
    //for (var c in wordList) {
    //    // creating the word elements 
    //    var col = getColor(c, letterCodeList);
    //    console.log(col);
    //    var t = new Letter(c,col,'');
    //}
    //     resolve(true);
    //});
};
function createLetterElement(char) {
    return new Letter(char.letter, char.color, "");
}
function getColor(char, list) {
    //console.log(list);
    return result = list.find(function (l) {
        return l.letter == char;
    });

}
function Start() {
    //Promise.all([wordsCreated]).then(function (a) {

    //})
    //flexData('info/colorCode.json', createLetterList);

    //var x = document.createElement("strong");

    //t.letterElement("tete");
    //t.letterElement("dddddd");
    //x.setAttribute("id", "test");
    //x.style.color = "green";
    //x.innerText = "dsalgf";

    //var x = new Letter("a", "green");
    //var t = document.getElementById("wordTest");
    //t.appendChild(x.letterElement("tete"));

    //var a = new Letter("a", "green", "t");
    //var b = new Letter("b", "red", "te");
    //var c = new Letter("c", "blue", "te");
    //var letterList = new Array(a, b, c);
    //// var word = new Word('abc', letterList, 1);
    //word.GetWordElement();
    if (show) {
        wordTest.appendChild(gameWordList[0].GetWordElement());
        activeWord = gameWordList[0].word;
    }
    // wordTest.appendChild(word.GetWordElement());
    //word.ChangeLetterStyle("a");

}


function createLetterList(data) {
    console.log("test");
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
        v = new Letter(lett, col);
        letterList[i] = v;
    }

    //flexData('info/words.json', createWordWithLetters, letterList);

}
function createWordWithLetters(data, info) {
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
            wordInLetters[g] = findLetter(info, te);
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

var x = document.createElement("CANVAS");
x.id = 'Canvas';
var ctx = x.getContext("2d");
//functions
function showData(data) {
    //console.log(data[0].title);
    //console.log(data[0].title);
    document.getElementById("title").innerHTML = data[0].title;
    document.getElementById("story").innerHTML = data[0].story;


}

function setbackground(component, backgroundlocation) {
    component.body.style.background = backgroundlocation;
    component.body.style.backgroundPosition = 'center';
    component.body.style.backgroundRepeat = 'no-repeat';
    component.body.style.backgroundSize = 'cover';
}

function removeStarWarsTekst() {
var elem = document.getElementById('starwars');
    if (elem != null) {
        elem.parentNode.removeChild(elem);
    }
}

function myClickHandler() {
    removeStarWarsTekst();
    Start();
    //var ele = document.getElementById('Canvas');
    //if (ele == null) {
    //    document.body.appendChild(x);

    //}

    //CanvasMaker();
}

flexData('info/story.json', showData);



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
    step = step + 5;
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
    /*
    ctx.fillStyle = "blue";
    ctx.font = "20pt Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    step = 0;
    steps = x.height + 50;
    //RunTextRightToLeft();
    */
}

