var Values = (function () {
    function Values() {
    }
    Object.defineProperty(Values, "currentBet", {
        get: function () {
            return this._currentBet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Values, "currentCredits", {
        get: function () {
            return this._currentCredits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Values, "totalLost", {
        get: function () {
            return this._totalLost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Values, "totalWon", {
        get: function () {
            return this._totalWon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Values, "averages", {
        get: function () {
            return this._averages;
        },
        enumerable: true,
        configurable: true
    });
    Values.getNetWinning = function () {
        return Values._totalWon - Values.totalLost;
    };
    Values.resetAllScores = function () {
        Values._currentBet = 0;
        Values._currentCredits = 10;
        Values._totalWon = 0;
        Values._totalLost = 0;
        Values._averages = [];
        document.getElementById("bettingVal").innerText = Values.currentBet.toString();
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();
    };
    Values.updateAverageList = function () {
        var currentAvg = (Values.totalWon - Values.totalLost) / (Values.averages.length + 1);
        this._averages.push(currentAvg);
    };
    Values.makeBet = function (value) {
        //if you don't have enough credits to perform current bet alert.
        if (Values.currentCredits < value) {
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
    };
    Values.incrementCreditsByOne = function () {
        document.getElementById("reelMessage").innerText = "";
        Values._currentCredits++;
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();
    };
    Values.addToTotalLost = function (lostAmount) {
        Values._totalLost += lostAmount;
    };
    Values.addToTotalWon = function (wonAmount) {
        Values._totalWon += wonAmount;
    };
    Values.addToCurrentCredits = function (wonAmount) {
        Values._currentCredits += wonAmount;
    };
    Values.resetCurrentBet = function () {
        Values._currentBet = 0;
        document.getElementById("bettingVal").innerText = Values._currentBet.toString();
        document.getElementById("creditVal").innerText = Values.currentCredits.toString();
    };
    Values._averages = [];
    return Values;
}());
