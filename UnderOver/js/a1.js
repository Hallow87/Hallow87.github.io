function changeHeaderText() {

    let userInput = prompt("Enter a number:");

    
    let num = parseInt(userInput);

    
    let header = document.querySelector("h1");

    
    if (num < 10) {
      
      header.textContent = "Under ten";
    } else {
      
      header.textContent = "Over ten";
    }
  }