console.log("1. Solve Problems array  Menggunakan Built-in Function pada Array");


function dataHandling2 (input){

  input.splice(1,1, " Roman Alamsyah Elsharawy ");
  input.splice(2,1,"Provinsi Bandar Lampung");
  input.splice(4,0,"Pria");
  input.splice(5,1,"SMA Internasional Metro");
  console.log(input);
/*=============================================================================*/
  var bulan    = input[3].split("/");
  var bulanNum = Number(bulan[1]);
  switch (bulanNum) {
  case 1 : {console.log(" Januari "); break;}
  case 2 : {console.log(" Februari "); break;}
  case 3 : {console.log(" Maret "); break;}
  case 4 : {console.log(" April " ); break;}
  case 5 : {console.log(" Mei " ); break;}
  case 6 : {console.log(" Juni " ); break;}
  case 7 : {console.log(" Juli " ); break;}
  case 8 : {console.log(" Agustus " ); break;}
  case 9 : {console.log(" September " ); break;}
  case 10 : {console.log(" Oktober " ); break;}
  case 11 : {console.log(" November " ); break;}
  case 12 : {console.log(" Desember " ); break;}

  default : {console.log("Format yang anda masukan salah !!");
  }
  }
/*=============================================================================*/
  bulan.sort(function(a,b) { return b-a})
  console.log(bulan);
/*=============================================================================*/
  bulanJoin=input[3].split("/").join("-")
  console.log(bulanJoin);
/*=============================================================================*/
  var namaSlice=input[1].slice(1,15);
  console.log(namaSlice);

}
var input = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"];

dataHandling2(input);
