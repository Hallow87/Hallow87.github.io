person = {
  "name" : "Emil",
  "age" : "17",
  "gender" : "male",
}

person["sound"] = function(){
  console.log("meow!");
}

var obj = {
  'name' : "Kalob"
}

person.getAge = function(){
  alert(this.name + "is" + this.age + "years old");
}

var Porche959 = {
  '959' : true,
  'manufacturer' : "Porche",
  'model' : "959",
  'displacement' : "2.8L",
  'power output' : "450ps, 500nm",
  'Production years' : "1986-1993",
  'Weight' : "1450kg",
  'sound' : function(){
    console.log("Wroooomm");
  },
}
const userInput = prompt('Enter the model name:')

  if (Porche959.hasOwnProperty(userInput)){
    console.log(Porche959);
}

var Porche930 = {
  '930' : true,
  'manufacturer' : "Porche",
  'model' : "930",
  'displacement' : "3.0L",
  'power output' : "450ps, 500nm",
  'Production years' : "1975-1977",
  'Weight' : "1210kg",
  'sound' : function(){
    console.log("Wroooomm");
  },
}
  if (Porche930.hasOwnProperty(userInput)){
    console.log(Porche930);
}