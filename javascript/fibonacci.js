function fibonacci(num) {
  // type your code here
  let array = [0,1]
  if (num > 1){
    for (let i = 2; i <= num; i++){
      array[i] = array[i-1] + array [i-2]
    }
  }
  return array[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
  Array = 0, 1
  For any numbers in the series beyond those starting numbers, 
  add the previous two numbers together until you get to the nth number passed in
  return the last number in the array 
*/

// And a written explanation of your solution

/*
 I initialized the array with the first two values. For any numbers passed in that are beyond those first two, 
 I build out the series up to that number and then return the last value. 
*/
