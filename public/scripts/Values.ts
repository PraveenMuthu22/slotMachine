class Values{
    private static _currentBet : number;
    private static _currentCredits : number;
    private static _totalLost : number;
    private static _totalWon : number;

    private static _averages : number[] = [];




    static get currentBet(): number {
        return this._currentBet;
    }


    static get currentCredits(): number {
        return this._currentCredits;
    }


    static get totalLost(): number {
        return this._totalLost;
    }


    static get totalWon(): number {
        return this._totalWon;
    }


    static get averages(): number[] {
        return this._averages;
    }

    static getNetWinning(){
        return Values._totalWon - Values.totalLost;
    }

    static resetAllScores(){
        Values._currentBet = 0;
        Values._currentCredits = 10;
        Values._totalWon = 0;
        Values._totalLost = 0;
        Values._averages = [];

        document.getElementById("bettingVal").innerText = Values.currentBet.toString();
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();
    }

    static updateAverageList() {
        var currentAvg : number = (Values.totalWon - Values.totalLost) / (Values.averages.length + 1);
        this._averages.push(currentAvg)
    }

    static makeBet(value : number){
        //if you don't have enough credits to perform current bet alert.
        if(Values.currentCredits < value){
            document.getElementById("reelMessage").innerText = "You don't have enough credits";
            return false;
        }
        //else place the bet

        //decrement incremement values
        Values._currentBet += value;
        Values._currentCredits -= value;

        //update view
        document.getElementById("bettingVal").innerText = Values.currentBet.toString();
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();

        return true;
    }

    static incrementCreditsByOne(){
        document.getElementById("reelMessage").innerText = "";
        Values._currentCredits++;
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();
    }

    static addToTotalLost(lostAmount : number){
        Values._totalLost += lostAmount;
    }

    static addToTotalWon(wonAmount : number){
        Values._totalWon += wonAmount;
    }

    static addToCurrentCredits(wonAmount : number){
        Values._currentCredits += wonAmount;
    }

    static resetCurrentBet(){
        Values._currentBet = 0;
        document.getElementById("bettingVal").innerText = Values._currentBet.toString();
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();

    }

}