///////////////////////////////////////
//Global variables
///////////////////////////////////////
var databaseRef = firebase.database().ref();
var allReelsStopped = true;
var maxButtonPressed = false;
var reel1 = new Reel();
var reel2 = new Reel();
var reel3 = new Reel();
var thread1;
var thread2;
var thread3;
///////////////////////////////////////
//Things to set initially
///////////////////////////////////////
Values.resetAllScores();
var backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.volume = 0.01;
///////////////////////////////////////
//button area
///////////////////////////////////////
document.getElementById("betOne").addEventListener("click", function () {
    setMessage("");
    AudioClips.buttonClick.play();
    //make bet if reels are stopped. Else show message.
    if (allReelsStopped === true) {
        Values.makeBet(1);
    }
    else {
        setMessage("Can't bet when reels spinning");
    }
});
document.getElementById("betThree").addEventListener("click", function () {
    AudioClips.buttonClick.play();
    //make bet if reels are stopped and max button not already pressed. Else show message.
    if (allReelsStopped === true && maxButtonPressed === false) {
        var result = Values.makeBet(3);
        if (result) {
            maxButtonPressed = true;
        }
    }
    else {
        if (allReelsStopped === false) {
            setMessage("Can't bet when reels spinning");
        }
        else if (maxButtonPressed) {
            setMessage("Max bet can only be placed once");
        }
    }
});
document.getElementById("reset").addEventListener("click", function () {
    AudioClips.buttonClick.play();
    resetGame();
});
document.getElementById("addCoin").addEventListener("click", function () {
    AudioClips.insertCoin.play();
    Values.incrementCreditsByOne();
});
document.getElementById("spin").addEventListener("click", function () {
    AudioClips.buttonClick.play();
    //spin only if bet amount is greater than 0
    if (Values.currentBet > 0) {
        startSpinning();
    }
    else {
        setMessage("You have not made a bet");
    }
});
document.getElementById("uploadBtn").addEventListener("click", function () {
    uploadScore();
});
document.getElementById("scoreboardBtn").addEventListener("click", function () {
    window.open("http://localhost:9000/stats");
});
///////////////////////////////////////
//click symbols to stop spinning
///////////////////////////////////////
document.getElementById("img1").addEventListener("click", function () {
    AudioClips.stopReel.play();
    stopSpinning(thread1, reel1);
});
document.getElementById("img2").addEventListener("click", function () {
    AudioClips.stopReel.play();
    stopSpinning(thread2, reel2);
});
document.getElementById("img3").addEventListener("click", function () {
    AudioClips.stopReel.play();
    stopSpinning(thread3, reel3);
});
document.getElementById("nameTxt").addEventListener("click", function () {
    setMessage("uploading will reset game");
});
///////////////////////////////////////
//methods
///////////////////////////////////////
//set message
function setMessage(message) {
    document.getElementById("reelMessage").innerText = message;
}
//spin all reels
function startSpinning() {
    if (allReelsStopped === true) {
        var index = 0;
        setMessage("Click on reels to stop");
        allReelsStopped = false;
        reel1.spinning = true;
        reel2.spinning = true;
        reel3.spinning = true;
        reel1.shuffle();
        reel2.shuffle();
        reel3.shuffle();
        thread1 = startThread("img1", reel1);
        thread2 = startThread("img2", reel2);
        thread3 = startThread("img3", reel3);
    }
    else {
        setMessage("Already spinning");
    }
}
function startThread(imgId, reel) {
    return setInterval(function () {
        reel.incrementIndex();
        document.getElementById(imgId).setAttribute("src", reel.getSymbolAt(reel.curIndex).image);
    }, 60);
}
function stopSpinning(thread, reel) {
    //if current reel is spinning, stop it.
    if (reel.spinning) {
        reel.spinning = false;
        setMessage("");
        clearInterval(thread);
        //if all reels stopped, set boolean
        if (!reel1.spinning && !reel2.spinning && !reel3.spinning) {
            allReelsStopped = true;
            maxButtonPressed = false;
            determineGameResults();
        }
    }
    else {
        setMessage("This reel is not spinning");
    }
}
function determineGameResults() {
    var total = 0;
    var reel1Score = reel1.getCurrentSymbol().value;
    var reel2Score = reel2.getCurrentSymbol().value;
    var reel3Score = reel3.getCurrentSymbol().value;
    if (reel1Score == reel2Score || reel1Score == reel3Score) {
        total = reel1Score * Values.currentBet;
    }
    else if (reel2Score == reel3Score) {
        total = reel2Score * Values.currentBet;
    }
    //if won
    if (total > 0) {
        AudioClips.win.play();
        setMessage("You won $" + total);
        Values.addToTotalWon(total);
        Values.addToCurrentCredits(total);
    } //if lost
    else {
        AudioClips.lose.play();
        setMessage("You lost! Try again");
        Values.addToTotalLost(Values.currentBet);
    }
    Values.resetCurrentBet();
    document.getElementById("netWinning").innerText = Values.getNetWinning().toString();
}
function uploadScore() {
    var nameTxt = document.getElementById("nameTxt");
    //check if score is above 50
    if (Values.getNetWinning() < 50) {
        setMessage("Should score above 50 to upload");
        return;
    }
    //check if form is empty
    if (nameTxt.value.length == 0) {
        setMessage("Enter name");
        return;
    }
    //upload score if above 50
    databaseRef.push({
        Name: nameTxt.value,
        Score: Values.getNetWinning()
    });
    resetGame();
}
function resetGame() {
    allReelsStopped = true;
    maxButtonPressed = false;
    Values.resetAllScores();
    setMessage("Game Reset");
    clearInterval(thread1);
    clearInterval(thread2);
    clearInterval(thread3);
    document.getElementById("bettingVal").innerText = Values.currentBet.toString();
    document.getElementById("creditVal").innerText = Values.currentCredits.toString();
    document.getElementById("netWinning").innerText = Values.getNetWinning().toString();
    document.getElementById("nameTxt").value = "";
}
