function checkSeason() {
    const inputMonth = document.getElementById("birthMonth").value.toLowerCase();
    let season;
 
    if (inputMonth === "december"|| inputMonth === "january" || inputMonth === "february") {
     season = "winter";
    } else if (inputMonth === "march" || inputMonth === "april" || inputMonth === "may") {
     season = "spring";
    } else if (inputMonth === "june" || inputMonth === "july" || inputMonth === "august") {
     season = "summer";
    } else if (inputMonth === "september" || inputMonth === "october" || inputMonth === "november") {
     season = "fall";
    } else {
     season = "invalid";
    }
 
    if (season === "invalid") {
     document.getElementById("result").innerHTML = "Please enter a valid birth month.";
    } else {
     document.getElementById("result").innerHTML = `You were born in the ${season} season.`;
    }
   }

  