let myAge = 20;
let humanDogRatio = 7;

let newDogAge = document.getElementById("count-el")
console.log(newDogAge)
// document.getElementById("count-el").innerText = myDogAge;

function sumAge() {
  let myDogAge = myAge * humanDogRatio
  newDogAge.innerText = myDogAge
  console.log(myDogAge)
}

// sumAge();
