console.log("1. Solve Problems array  palindrome(kata)");

function palindrome(kata) {
  if (kata === kata.split('').reverse().join('')){
    return true;
  }
  else{
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
