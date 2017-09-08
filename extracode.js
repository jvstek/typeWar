// Your code here!
'use strict';
//var data;


//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'myfile.json', true);
//xhr.send();
//xhr.onreadystatechange = function () {console.log('1');
//    console.log(xhr.readyState);
//    //readystate
//    //status 
//   // console.log('2');
//    console.log(xhr.status);
//    //statustext
//   // console.log('3');
//    console.log(xhr.statusText);
//}
//xhr.onload=function(){
//    var mystuff = JSON.parse(xhr.responseText);
//    console.log('4');
//    console.log(mystuff);
//}
console.log('e');
var data;
function loadData() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'myfile.json', true);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            data = JSON.parse(this.responseText);
            console.log(data);
            showData(data);
        }
    }
    xmlhttp.send();
}
loadData();

function showData(data) {
    console.log(data[0].title);
    document.getElementById("title").innerHTML = data[0].title;
    document.getElementById("story").innerHTML = data[0].story;
}

//function loadJSON(path, success, error) {
//    var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === XMLHttpRequest.DONE) {
//            if (xhr.status === 200) {
//                if (success)
//                    success(JSON.parse(xhr.responseText));

//            } else {
//                if (error)
//                    error(xhr);
                
//            }
//        }
//    };
//    xhr.open("GET", path, true);
//    xhr.send();
//}

//console.log('tet');
//loadJSON("myfile.json",
//         function (data) { console.log('succes'); },
//         function (xhr) { console.error(xhr); console.log("error"); }
//);

//document.getElementById("test").innerHTML = "Page location is " + window.location.pathname;
function setbackground(component, backgroundlocation) {
    component.body.style.background = backgroundlocation;
    component.body.style.backgroundPosition = 'center';
    component.body.style.backgroundRepeat = 'no-repeat';
    component.body.style.backgroundSize = 'cover';
}
setbackground(this.document, "url('../images/space1.jpg')");
//document.body.style.background = "url('../images/space1.jpg')";
//document.body.style.backgroundPosition = 'center';
//document.body.style.backgroundRepeat = 'no-repeat';
//document.body.style.backgroundSize = 'cover';

//document.getElementById("titlecontent").innerHTML = "titlecontent";
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
        console.log("enter key " );
        //alert("You hit the enter key.");
    } else {
        console.log(e);
    }
}

this.document.onclick = myClickHandler;

function myClickHandler() {
    var elem = document.getElementById('sta');

    elem != null ? elem.parentNode.removeChild(elem):"";
    
}
//console.log(data.words[1]);
/*
class Animal{
    constructor(voice) {
        this.voice = voice || "waassep!"
    };
    speak() { console.log(this.voice) }; // not enumareble by default
}
class Cat extends Animal {
    constructor(name, color) {
        super('meow')
        this.name = name;
        this.color = color;
    };
    jump() { console.log("no way to laze") };
}
var fluffy = new Cat('flufy', 'white');
fluffy.jump();
fluffy.speak();
/*
function Animal(voice) {
this.voice = voice || 'wassup'
}
Animal.prototype.speak = function () {
    console.log(this.voice);
}

function cat(name, color) {
    Animal.call(this, 'meow' );
    this.name = name;
    this.color = color;
}
cat.prototype = Object.create(Animal.prototype);
cat.prototype.constructor = cat;
var mugg = new cat('mugg', 'white');
mugg.speak();
console.log(mugg instanceof Animal);
console.log(mugg instanceof cat);
console.log(mugg.__proto__.__proto__);


/*
function cat(name, color) {
    this.name = name;
    this.color = color;
}
var mugg = new cat('mugg', 'white');
var fluffy = new cat('fluffy', 'white');
cat.prototype.age = 3;
cat.prototype = { age: 5 };
var snow = new cat('snow', 'white');
//mugg.age = 5;
console.log(mugg.age);
console.log(fluffy.age);
console.log(cat.prototype.age);
console.log(snow.age);


/* it first check functions then prototypes
function cat(name, color) {
    this.name = name;
    this.color = color;
}
var mugg = new cat('mugg', 'white');
var fluffy = new cat('fluffy', 'white');
cat.prototype.age = 3;
//mugg.age = 5;
console.log(mugg.age);
console.log(mugg.__proto__.age);
console.log(Object.keys(mugg));
console.log(mugg.hasOwnProperty('age'));

/*
function cat (name,color) {
    this.name = name;
    this.color = color;
}
cat.prototype.age = 3;

var fluffy = new cat('fluffy', 'white');
console.log(cat.prototype);
console.log(cat.__prote__);
console.log(cat.prototype === fluffy.__proto__);
var mugg = new cat('mugg', 'white');

/*
var cat = { name: 'fluffy' };
console.log(cat.__prote__);
// object dont have prototypes but proto's
/* prototype is a type that excist on every function in javascript
var arr = ['red', 'blue', 'green']
Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length-1]
    }});
//var last = arr[arr.length - 1];
var last = arr.last;
console.log(last);

/*
var sound = " woef";
var cat = {
    name: {first:'fluffy',last:'hellrazor' },
    color: 'white',
    speak: function () { document.getElementById("test").innerHTML = sound; }
    // ['Eye Color'] = 'yellow'
}
Object.defineProperty(cat, 'fullName',
    {
        get: function () {
            return this.name.first + " " + this.name.last
        },
        set: function (value) {
            var nameParts = value.split(' ')
            this.name.first = nameParts[0]
            this.name.last = nameParts[1]
        }
    });
//var c = cat;
cat.fullName = 'muffin wannabe'
console.log(cat.fullName);
console.log(cat.name.first);
console.log(cat.name.last);
console.log(" last thing" );


/*
var sound = " woef";
var cat = {
    name: 'fluffy',
    color: 'white',
    speak: function () { document.getElementById("test").innerHTML = sound; }
    // ['Eye Color'] = 'yellow'
}
Object.defineProperty(cat, 'name', { configurable: false });
/*
var cat = {
    name: 'fluffy',
    color: 'white',
    speak: function () { document.getElementById("test").innerHTML = sound; }
    // ['Eye Color'] = 'yellow'
}
Object.defineProperty(cat, 'name', { enumerable: false }); 
for (var propertyName in cat) {
    console.log(propertyName + ' : ' + cat[propertyName]);
}
console.log(Object.keys(cat));
console.log(JSON.stringify(cat));
/*
var cat = {
    name: 'fluffy',
    color: 'white',
    speak: function () { document.getElementById("test").innerHTML = sound; }
    // ['Eye Color'] = 'yellow'
}
Object.defineProperty(cat, 'name', { writable: false });
cat.name = 'test';
console.log(Object.getOwnPropertyDescriptor(cat,'name'));
console.log(cat.name);
/*
var cat = {
    name: 'fluffy',
    color: 'white',
    speak: function () { document.getElementById("test").innerHTML = sound; }
   // ['Eye Color'] = 'yellow'
}
cat['Eye Color'] = 'yellow'
console.log(cat['Eye Color']);
/*
class cat{ 
    constructor(name, color) {
    //name: 'fluffy',
    this.color = 'white'
    }
    speak(){console.log('miauw');}
}
var t = new cat(' fluffly', 'white'); // 
t.speak();
document.getElementById("test").innerHTML = t.color;



/*
function cat (name, color) {
    //name: 'fluffy',
    this.color= 'white'
}
var cat = new cat(' fluffly', 'white'); // 
document.getElementById("test").innerHTML = cat.color;
/*
var sound = " woef" ;
var cat = {
    name: 'fluffy',
    color: 'white',
    //speak: function () { console.log(sound); }//document.getElementById("test").t; }
    speak: function () { document.getElementById("test").innerHTML = sound; }
}
cat.age = 3;
cat.speak();
*/