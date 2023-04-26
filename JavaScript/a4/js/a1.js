var name = 'abc';

var name = prompt('What is your name?');
var welcomeNode = document.getElementById('welcome');

if (name === 'abc') {
    welcomeNode.innerText = 'Welcome to your website!';
}