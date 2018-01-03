var databaseRef = firebase.database().ref();
var scores = [];
//only display when asynchronous call is completed
loadScoresToArray().then(function (scores) {
    displayScoreBoard();
});
function loadScoresToArray() {
    return new Promise(function (resolve, reject) {
        databaseRef.orderByChild("Score").on("child_added", function (snap) {
            scores.push(snap.val());
            resolve(scores);
        });
    });
}
function displayScoreBoard() {
    var position = 1;
    for (var i = scores.length - 1; i >= 0; i--) {
        var row = document.createElement("tr");
        document.getElementById("scoreTable").appendChild(row);
        var positionTd = document.createElement("td");
        positionTd.appendChild(document.createTextNode(position.toString()));
        row.appendChild(positionTd);
        var nameTd = document.createElement("td");
        nameTd.appendChild(document.createTextNode(scores[i].Name));
        row.appendChild(nameTd);
        var scoreTd = document.createElement("td");
        scoreTd.appendChild(document.createTextNode(scores[i].Score));
        row.appendChild(scoreTd);
        position++;
    }
}
