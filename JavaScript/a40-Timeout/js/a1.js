console.log("Starting")

setTimeout(function() {
    console.log("Finished")
    const body = document.querySelector("body")
    body.style.backgroundColor ="Blue"
    body.style.color ="Red"
}, 3000)

console.log("aftermath")