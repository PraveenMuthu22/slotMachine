var Reel = (function () {
    //constructor
    function Reel() {
        this._curIndex = 0;
        this.reel = [
            new Symbol(7, "/assets/images/redseven.png", "seven"),
            new Symbol(6, "/assets/images/bell.png", "bell"),
            new Symbol(5, "/assets/images/watermelon.png", "watermelon"),
            new Symbol(4, "/assets/images/plum.png", "plum"),
            new Symbol(3, "/assets/images/lemon.png", "lemon"),
            new Symbol(2, "/assets/images/cherry.png", "cherry")
        ];
    }
    //shuffle reel using Durstenfeld shuffle algorithm
    Reel.prototype.shuffle = function () {
        for (var i = this.reel.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.reel[i];
            this.reel[i] = this.reel[j];
            this.reel[j] = temp;
        }
    };
    Reel.prototype.getReelSize = function () {
        return this.reel.length;
    };
    //get image at specific index of reel
    Reel.prototype.getSymbolAt = function (index) {
        return this.reel[index];
    };
    Object.defineProperty(Reel.prototype, "spinning", {
        get: function () {
            return this._spinning;
        },
        set: function (value) {
            this._spinning = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reel.prototype, "curIndex", {
        get: function () {
            return this._curIndex;
        },
        set: function (value) {
            this._curIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Reel.prototype.incrementIndex = function () {
        this._curIndex = (this._curIndex + 1) % this.reel.length;
    };
    Reel.prototype.getCurrentSymbol = function () {
        return this.reel[this._curIndex];
    };
    return Reel;
}());
