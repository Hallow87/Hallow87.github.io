
var input = document.querySelector(".js-name")
var nameElem = document.querySelector(".js-change-name")
input.addEventListener('keyup', function(event) {
    nameElem.innerText = event.target.value
});
input.addEventListener('keyup', callback);