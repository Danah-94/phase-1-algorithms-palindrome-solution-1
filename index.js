function reverseString(word) {
  /*
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
  */
  
  //method Chaining
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/*
 Instructions:
Write a function isPalindrome that will receive one argument, a string. 
Your function should return true if the string is a palindrome 
(that is, if it reads the same forwards and backwards, like "mom" or "racecar"), 
and return false if it is not a palindrome.
*/

/*
 1. Rewrite the Problem in Your Own Words

 I need to make an isPalindrome function that returns either true or false. 
 When the input string is the same forwards and backwards, I should return true. 
 That means that if the input string is the same after I reverse it, I should return true. 
 For instance, "mom" in reverse is also "mom", and "racecar" in reverse is also "racecar", 
 so my solution should return true for these cases. 
 "hi" in reverse is "ih", so my solution should return false for this case.
/* 
  Add your pseudocode here

  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  ;console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
