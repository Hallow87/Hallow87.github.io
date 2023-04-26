var alias = 'John Doe';
var age = 30;
var gender = 'male';
var country = 'USA';

var person = {
    name: alias,
    age: age,
    gender: gender,
    country: country
}


alert(JSON.stringify(person));

console.log(person);



var test = document.getElementById('hhhh');
var oldText = test.innerHTML;
test.innerHTML = "<u>hello</u> world";

const myElement = document.getElementById("hhhh");
myElement.style.color = "red";