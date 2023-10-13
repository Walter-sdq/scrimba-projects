// document.getElementById("count-el").innerHTML = 5;

////////////////////////////
let myAge = 10;
let humanDogRatio = 7;
function sumAge() {
  let myDogAge = myAge * humanDogRatio;
  console.log(myDogAge);
}

////////////////////////////

let saveEl = document.getElementById("save-el")
let newCount = document.getElementById(`count-el`);
console.log(newCount);

let count = 0;

function increase() {
  count = count + 1;
  console.log(`button clicked`);
  newCount.innerText = count;
  console.log(count);
}


function save() {
  console.log(`${count} saved`);
  console.log(count)
}


// save();
