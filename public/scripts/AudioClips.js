var AudioClips = (function () {
    function AudioClips() {
    }
    Object.defineProperty(AudioClips, "buttonClick", {
        get: function () {
            return this._buttonClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioClips, "insertCoin", {
        get: function () {
            return this._insertCoin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioClips, "lose", {
        get: function () {
            return this._lose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioClips, "stopReel", {
        get: function () {
            return this._stopReel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioClips, "win", {
        get: function () {
            return this._win;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioClips, "backgroundMusic", {
        get: function () {
            return this._backgroundMusic;
        },
        enumerable: true,
        configurable: true
    });
    AudioClips._buttonClick = new Audio("/assets/sounds/buttonClick.mp3");
    AudioClips._insertCoin = new Audio("/assets/sounds/insertCoin.mp3");
    AudioClips._lose = new Audio("/assets/sounds/lose.wav");
    AudioClips._stopReel = new Audio("/assets/sounds/stopreel.mp3");
    AudioClips._win = new Audio("/assets/sounds/win.wav");
    AudioClips._backgroundMusic = new Audio("/assets/sounds/backgroundMusic.mp3");
    return AudioClips;
}());
