class Reel {
    private reel: Symbol[];
    private _spinning: boolean;
    private _curIndex: number = 0;

    //constructor
    constructor() {
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
    shuffle() {
        for (var i = this.reel.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.reel[i];
            this.reel[i] = this.reel[j];
            this.reel[j] = temp;
        }
    }

    getReelSize() {
        return this.reel.length;
    }

    //get image at specific index of reel
    getSymbolAt(index: number) {
        return this.reel[index];
    }


    get spinning(): boolean {
        return this._spinning;
    }

    set spinning(value: boolean) {
        this._spinning = value;
    }

    get curIndex(): number {
        return this._curIndex;
    }

    set curIndex(value: number) {
        this._curIndex = value;
    }

    incrementIndex() {
        this._curIndex = (this._curIndex + 1) % this.reel.length;
    }

    getCurrentSymbol(){
        return this.reel[this._curIndex];
    }
}