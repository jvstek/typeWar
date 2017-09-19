// Your code here!

class Word {
    constructor(word, letters, location) {
        this.word = word;
        this.letters = letters;
        this.activeLetter = 0;
        //how to calculate score?
        this.location = location;
        this.alive = true;
    }
    GetWordElement() {
        var g = document.createElement("P");
        g.setAttribute("id", this.word);
        var t = 0;
        for (var i = 0; i < this.letters.length; i++) {

            g.appendChild(this.letters[i].letterElement(this.word + t));
            i == 0 ? this.letters[i].activeStyle() : "";
        }
        //for (var i in this.letters) {
        //    g.append(i.letterElement(this.word + t));
        //    t++;
        //}

        return g;
    }
    ChangeLetterStyle() {
        this.letters[this.activeLetter].basicStyle();
        this.activeLetter++;
        this.activeLetter<this.word.length?this.letters[this.activeLetter].activeStyle():"";
    }
    reset() { this.activeLetter = 0;}
}

/*
Object.defineProperty(Word, 'w',
    {
        get: function () {
            return this.w;
        },
        set: function (value) {
            this.w = value;
        }
    });
Object.defineProperty(Word, 'location',
    {
        get: function () {
            return this.location + "10";
        },
        set: function (value) {
            this.location = value;
        }
    });
Object.defineProperty(Word, 'alive',
    {
        get: function () {
            return this.alive;
        },
        set: function (value) {
            this.alive = value;
        }
    });
Object.defineProperty(Word, 'showWord',
    {
        get: function (documentElement) {
            if (alive === true) {

                documentElement.createElement("p");
                x.setAttribute("id", this.w);

                for (var i in this.letters) {
                    x.append(i.letterElement(Math.random()));
                    g++;
                }
                return x;
            } else { return false; }
        },
        set: function () {

        }
    });*/