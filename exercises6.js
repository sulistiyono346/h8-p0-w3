console.log("1. Solve Problems array  angkaPalindrome(num)");

function angkaPalindrome(num) {
  for(var i = num + 1; i >= 0; i++ ){
    var numStr = String(i).split('').reverse().join('')
    if (i < 10){
      return i;
    }
    else if (i == numStr){
      return i;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9 < 10
console.log(angkaPalindrome(10)); // 11 >10
console.log(angkaPalindrome(117)); // 121>10
console.log(angkaPalindrome(175)); // 181>10
console.log(angkaPalindrome(1000)); // 1001>10




//11 22 33 44 55 66 77 88 99 101 111 121 131 141 151 161 171 181 191 202 212 222 232 242
