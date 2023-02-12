class GuessingGame {
    min;
    max;
    centr;

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.centr = ((this.max - this.min) % 2) !== 0 ? 
            ((this.max - this.min) / 2) + 0.5 + this.min : 
                ((this.max - this.min) / 2 + this.min);
        return this.centr
    }

    lower() {
        this.setRange(this.min, this.centr);
    }

    greater() {
        this.setRange(this.centr, this.max);
    }
}

module.exports = GuessingGame;
