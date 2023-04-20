// Query selectors for the used elements

var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color")
var body = document.querySelector("body")
//bgColor.addEventListener('keyup', function(event) {
//  var body = document.querySelector("body")
//  body.style.backgroundColor = event.target.value
//})


//event listeners for background color, followed by event listeners for text color

textColor.addEventListener('keyup', function(event) {
  var body = document.querySelector("label")
  body.style.color = event.target.value
})

bgColor.addEventListener('keyup', function(event) {
 var color = event.target.value
 //limis usable colors
 switch (color) {
   case 'black':
   case 'white':
   case 'yellow':
   case 'green': 
         body.style.backgroundColor = color
         break
    default:
         body.style.backgroundColor = "blue"
         break
 }
});


 // Defining event listener function
function displayWindowSize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var size = "Width: " + w + ", " + "Height: " + h;
  document.getElementById("windowSize").innerHTML = size;
}

// Event listener looking for window resize
window.addEventListener("resize", displayWindowSize);


// Button that changes when it's pressed
var btn = document.getElementById("myBtn");
 
function sayHello() {
    alert("Look at the button again");
}
 
function setHoverColor() {
    btn.style.background = "yellow";
}
 
function setNormalColor() {
    btn.style.background = "";
}
 
// Assigning event listeners to the button
btn.addEventListener("click", sayHello);
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);