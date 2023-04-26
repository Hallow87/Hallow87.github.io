var input = prompt('three first letters');
var inputLower = input.toLowerCase();

var text = document.getElementById('text');
if (inputLower == "abc") {
    text.innerHTML = "<strong>Correct!</strong>";
} else {
    text.innerHTML = "<strong>Wrong!</strong>";
}