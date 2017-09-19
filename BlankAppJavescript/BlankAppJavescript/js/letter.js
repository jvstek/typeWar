class Letter {
    constructor(character, color) {
        this.character = character;
        this.color = color;
        //this.letterElement;
    };
    letterElement(name) {
        var x = document.createElement("strong");
        x.setAttribute("id", name);
        x.style.color = this.color;
        x.innerText = this.character;
        return x;
    }
}
Object.defineProperty(Letter, 'character',
    {
        get: function () {
            return this.character;
        },
        set: function (value) {
            this.character = value;
        }
    });
Object.defineProperty(Letter, 'color',
    {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        }
    });
Object.defineProperty(Letter, 'letterElement',
    {
        get: function (name) {
            var x = document.createElement("strong");
            x.setAttribute("id", name);
            x.style.color = this.color;
            x.innerText = this.character;
            return x;
        }
    });

