function checkUrl() {
    // Fetch URL
    var url = document.getElementById("url-input").value;
  
    // Check https
    if (!url.startsWith("http")) {
      // If no http, add http
      url = "http://" + url;
    }
    if (!url.endsWith(".com")) {
        // add .com
        url = url + ".com";
      }
  
    // Display the fixed URL
    document.getElementById("result").innerHTML = "<a href='" + url + "'>Destination</a>";
  }


