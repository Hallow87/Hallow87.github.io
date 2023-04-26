let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

alert(text);

var hhhh = document.getElementById("hhhhh");


var sentenceNode = document.getElementById("sentence")
var sentence = sentenceNode.innerText

var uppercase = sentence.toLocaleUpperCase()
var lowercase  = sentence.toLocaleLowerCase()
var allWords = sentence.split(" ")
var bracketWords = "(" + allWords.join(")(") + ")"

console.log("Sentence", sentence)

console.log("Uppercase", uppercase)

var firstThreeWords = allWords.slice(0,3)
var lastThreeWords = allWords.slice(-3)