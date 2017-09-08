// Your code here!
'use strict';
class word {
    constructor(ctx,word,location,alive){
        this.ctx = ctx;
        this.words = word
        //how to calculate score?
        this.location = location;
        this.alive = alive;
        }
}

Object.defineProperty(word, 'word',
    {
        get: function () {
            return this.word;
        },
        set: function (value) {
            this.word = value;
        }
    });
Object.defineProperty(word, 'location',
    {
        get: function () {
            return this.location;
        },
        set: function (value) {
            this.location = value;
        }
    });
Object.defineProperty(word, 'alive',
    {
        get: function () {
            return this.alive;
        },
        set: function (value) {
            this.alive = value;
        }
    });
Object.defineProperty(word, 'showWord',
    {
        get: function () {
            if (alive === true) {
                
            }
        }
    });