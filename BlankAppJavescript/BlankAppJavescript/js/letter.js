class Letter {
    
    constructor(character, color,el) {
        this.character = character;
        this.color = color;
        this.el = el;
        //this.letterElement;
    };
    letterElement(name) {
        
        this.el = document.createElement("strong");
        this.el.setAttribute("id", name);
        
        this.el.innerText = this.character;
        this.basicStyle();
        return this.el;
    }
    activeStyle() {
       // this.character = this.character.fontsize(50);d
        this.el.style.font = "bold 300px Comic Sans MS";
        //this.el.style.color = "black";
       // this.el.fontSize = 20;
       // this.color = "black";
    }
    basicStyle() {
        this.el.style.color = this.color;
        this.el.style.font = "bold 40px Comic Sans MS";
    }

}/*
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

    */