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
