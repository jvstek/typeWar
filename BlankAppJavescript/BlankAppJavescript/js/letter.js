class letter {
    constructor(character, color) {
        this.character = character;
        this.color = color;
    };
}
Object.defineProperty(letter, 'character',
    {
        get: function () {
            return this.character;
        },
        set: function (value) {
            this.character = value;
        }
    });
Object.defineProperty(letter, 'color',
    {
        get: function () {
            return this.color;
        },
        set: function (value) {
            this.color = value;
        }
    });