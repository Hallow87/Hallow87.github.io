function saveCredentials() {
  //Noutaa käyttäjätiedot ja salasanan
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    //Tallentaa käyttäjätiedot ja salasanan
    const data = "Username: " + username + "\nPassword: " + password;
    //Blobi taikaa, noutaa tiedon ja luo nettisivun joka
    //ladataan localiin, \n saadaan uusi rivi tehtyä tiedostoon
    const blob = new Blob([data], {type: "text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    //Lataa tehdyn nettisivun jossa on tallennetut tiedot
    link.download = "user_credentials.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    //Jälki siivous
    URL.revokeObjectURL(url);
  }