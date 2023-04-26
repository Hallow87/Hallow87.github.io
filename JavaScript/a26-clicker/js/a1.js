
var totalClicks = 0
var btn = document.querySelector(".js-button")

btn.addEventListener("click", function(event) {
 totalClicks = totalClicks + 1
 document.getElementById("totalClicks").innerText = totalClicks
})
