var logger = setInterval(function() {
    console.log("hasn't crashed yet")
}, 1)

setTimeout(function() {
    clearInterval(logger)
}, 100000000000)
