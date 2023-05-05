var arr = ["kalob", "Nathan", "Zephyr", "Prarie", "Henry", "Veto", "Maya"]
//const kalob = arr[0]
//const nathan = arr[1]

let [kalob, nathan, zephyr, ...everyoneElse] = arr

console.log(everyoneElse)

let [firstName, lastName] = fullName.split(' ')

var fullName = prompt("What is your full name?")
console.log(firstName, "is the first name")
console.log(lastName, "is the last name")

const person = {
    "first_name_for_the_user": "DEFINETLY NOT KALOB",
    'age': 30,
    "cats" : 2,
    'food' : 'pizza',
}

let {
    first_name_for_the_user_: firstName,
    food : favoriteFood
} = person

let {name, food} = person
console.log("Name is "+ name)
console.log("Food is "+ favoriteFood)

