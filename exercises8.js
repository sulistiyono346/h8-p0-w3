console.log("1. Solve Problems array pasanganTerbesar(num)");

function pasanganTerbesar(num) {

  var numStr = String(num);
  var temp= 0;
  for (var i = 0; i < numStr.length; i++) {

    if (numStr[i] + numStr[i+1] > temp) {
      temp = parseInt(numStr[i] + numStr[i+1]);
    }
  }
  return temp;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

function pasanganTerbesar(num) {
  var numStr=String(num);
  var temp=0;
  for (var i = 0; i < numStr.length-1; i++) {
    var joinNum=numStr[i]+numStr[i+1]
    if (joinNum > temp) {
      temp=joinNum
    }
  }
  return temp;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
