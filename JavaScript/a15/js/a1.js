function changeColor() {
    document.getElementById("myHeader").style.backgroundColor = "blue";
}

function changeText() {
    document.getElementById("myHeader").innerHTML = "You've clicked a button";
}

function addExclamation() {
    document.getElementById("myHeader").innerHTML += "!";
}

function resetHeader() {
    document.getElementById("myHeader").style.backgroundColor = "#eee";
    document.getElementById("myHeader").innerHTML = "Click the buttons";
}