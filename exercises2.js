//1. Solve Problems menggunakan JavaScript balik ßStrin()

  console.log("1. Solve Problems menggunakan JavaScript balik ßString()");

    function balikString(kata) {

      var newString = '';

      for (i = kata.length - 1; i >= 0 ; i--) {
      newString = newString+kata[i];
      }
      return newString;
    }



    console.log(balikString('hello world!'));
