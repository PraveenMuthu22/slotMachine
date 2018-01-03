class Symbol{
    private _value : number;
    private _image :  string;
    private _symbolName : string;


    constructor(value: number, image: string, name: string) {
        this._value = value;
        this._image = image;
        this._symbolName = name;
    }


    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get symbolName(): string {
        return this._symbolName;
    }

    set symbolName(value: string) {
        this._symbolName = value;
    }

    toString(){
        return this._symbolName + " " + this._value;
    }
}