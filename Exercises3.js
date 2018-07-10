// var input = [
//                 ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                 ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                 ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                 ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//             ]
//
//
//             console.log("Nomor ID:"+ input [0][0]);
//             console.log("Nama Lengkap:"+ input [0][1]);
//             console.log("TTL:"+ input [0][2]+ input [0][3]);
//             console.log("Hobi:"+ input [0][4]);
//
//             console.log("Nomor ID:"+ input [1][0]);
//             console.log("Nama Lengkap:"+ input [1][1]);
//             console.log("TTL:"+ input [1][2]+ input [1][3]);
//             console.log("Hobi:"+ input [1][4]);
//
//             console.log("Nomor ID:"+ input [2][0]);
//             console.log("Nama Lengkap:"+ input [2][1]);
//             console.log("TTL:"+ input [2][2]+ input [2][3]);
//             console.log("Hobi:"+ input [2][4]);
//
            // console.log("Nomor ID:"+ input [3][0]);
            // console.log("Nama Lengkap:"+ input [3][1]);
            // console.log("TTL:"+ input [3][2]+ input [3][3]);
            // console.log("Hobi:"+ input [3][4]);
//==============================================================================
console.log("1. Solve Problems array  multidimensi (array di dalam array)()");

function dataHandling (input){

  for (var i = 0; i < input.length; i++) {
    console.log("Nomor ID:"+ input [i][0]);
    console.log("Nama Lengkap:"+ input [i][1]);
    console.log("TTL:"+ input [i][2]+ input [i][3]);
    console.log("Hobi:"+ input [i][4]);
  }
}
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
dataHandling(input)
