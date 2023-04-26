//for(var i=0; i< 10; i++) {
//  console.log(i);
//}
var words= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim voluptas, excepturi vel modi expedita, neque omnis blanditiis earum possimus harum porro repudiandae? Quis, quibusdam totam. Soluta laboriosam officia architecto?".split(" ")

var names = ["kalob", "Nathan", "Zephyr", "Henry"]

function toEmailAddress(name) {
  return name.toLowerCase() + "@gmail.com"
}


for (var i = 0; i < words.length; i++) {
  var currentEmail = words[i].toLowerCase() + "@gmail.com"
  //if(i==10) {
  //  break;
  //}
  if(i % 2 == 0){
    continue;
  }
  
  console.log(i, currentEmail)
}

