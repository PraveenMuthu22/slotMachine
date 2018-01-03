var Symbol = (function () {
    function Symbol(value, image, name) {
        this._value = value;
        this._image = image;
        this._symbolName = name;
    }
    Object.defineProperty(Symbol.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "symbolName", {
        get: function () {
            return this._symbolName;
        },
        set: function (value) {
            this._symbolName = value;
        },
        enumerable: true,
        configurable: true
    });
    Symbol.prototype.toString = function () {
        return this._symbolName + " " + this._value;
    };
    return Symbol;
}());
