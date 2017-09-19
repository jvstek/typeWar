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
var alive = false;
var show = true;

// to do set first word (should be in the init)
//** events Type Events **//
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    //console.log(e);
    keystrokes += e.char;
    
    if (alive) {

        activeWord[activeLetterLocation] == e.char ? matchingLetter() : noMatchLetter()

        refresh();
    }
    // what te doen wanneer je klaar bent?? 
    // effects? 
    if (e.keyCode == 13) { Start(); removeStarWarsTekst(); }
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

    if (show) {
        alive = true;
        wordTest.appendChild(gameWordList[0].GetWordElement());
        activeWord = gameWordList[0].word;
    }
  
}

function findLetter(list, letter) {
    var t = "";
    for (var i = 0; i < list.length; i++) {
        list[i].character == letter ? t = list[i] : "";
    }
    return t;
}

//Starwars Tekst.  
flexData('info/story.json', showData);
function showData(data) {
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

/** Click Event **/
document.onclick = myClickHandler;
function myClickHandler() {
    removeStarWarsTekst();
    Start();
}

function init() {
    //** init todo **//
    typing.innerText = keystrokes;
    score.innerText = gameScore;
    
}

