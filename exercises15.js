function groupAnimals(animals) {
  var sortAnimal=animals.sort();
  var tampung=[];
  var temp=[];
  for (var i = 0; i < sortAnimal.length; i++) {
    if (i !== sortAnimal.length -1 && sortAnimal[i][0]===sortAnimal[i+1][0] ) {
      tampung.push(sortAnimal[i])
    }
    else  {
      tampung.push(sortAnimal[i])
      temp.push(tampung)
      tampung=[]
     }
  }
  return temp;
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
