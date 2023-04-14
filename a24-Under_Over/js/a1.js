let userInput = [];
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
  function storage() {
    const userOutput = document.getElementById('userInput').value;
    const blob = new Blob([userOutput], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'myFile.txt';
    
    link.click();
    URL.revokeObjectURL(url);
  }