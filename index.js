function isPalindrome(word) {
  // Write your algorithm here
  let wordArray = word.split('')
  let copyArray = wordArray.slice()
  let reversedArray = copyArray.reverse()
  let joinReverse = reversedArray.join('')
  return joinReverse === word
}


/* 
  Add your pseudocode here
  check if any word representing word reversed, is spelled the same.
  -split word up by letters and put those letters into an array
  -make a shallow copy of that array
  -use the reverse() function on the copied array
  -join the reversed array and the original array back together into a 1 word string
  -check if the reversed word is equal to the original word input
  -it will return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('')

  console.log('Expecting: false')
  console.log('=>', isPalindrome('algorithm'))
}

module.exports = isPalindrome;
