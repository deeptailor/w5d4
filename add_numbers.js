// const readline = require('readline');
// const reader = readline.createInterface({
//   input : process.stdin,
//   output: process.stdout
// });

function addNumbers(sum = 0, numsLeft, completionCallback) {


  if (numsLeft === 0){
    reader.close();
    return completionCallback(sum);
  }

  reader.question("Enter a number: ", function(thisNumber){
    let num = parseInt(thisNumber);
    console.log(sum + num);
    addNumbers(sum+num, numsLeft-1, completionCallback)
  });


}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(array, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(array);
    }
  }
  outerBubbleSortLoop(true);
}



function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? (y or n)`, function (input) {
    if (input === 'y') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(array, index, madeAnySwaps, outerBubbleSortLoop) {
  if (index < array.length-1) {
    askIfGreaterThan(array[index], array[index+1], (isGreaterThan) => {
      if (isGreaterThan) {
        let temp = array[index];
        array[index] = array[index+1];
        array[index+1] = temp ;
        console.log(array);
        innerBubbleSortLoop(array, index+1, true, outerBubbleSortLoop);
      }else{
        innerBubbleSortLoop(array, index+1, false, outerBubbleSortLoop);
      }
    });
  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// console.log(innerBubbleSortLoop([2,1,4,3], 0))
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


Function.prototype.myBind = function(context){
  return () => {
    this.apply(context);
  }
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
myBoundTurnOn();
