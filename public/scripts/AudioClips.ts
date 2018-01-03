class AudioClips{
    private static _buttonClick = new Audio("/assets/sounds/buttonClick.mp3");
    private static  _insertCoin = new Audio("/assets/sounds/insertCoin.mp3");
    private static  _lose = new Audio("/assets/sounds/lose.wav");
    private static  _stopReel = new Audio("/assets/sounds/stopreel.mp3");
    private static  _win = new Audio("/assets/sounds/win.wav");
    private static  _backgroundMusic = new Audio("/assets/sounds/backgroundMusic.mp3");


    static get buttonClick(): HTMLAudioElement {
        return this._buttonClick;
    }

    static get insertCoin(): HTMLAudioElement {
        return this._insertCoin;
    }

    static get lose(): HTMLAudioElement {
        return this._lose;
    }

    static get stopReel(): HTMLAudioElement {
        return this._stopReel;
    }

    static get win(): HTMLAudioElement {
        return this._win;
    }

    static get backgroundMusic(): HTMLAudioElement {
        return this._backgroundMusic;
    }
}