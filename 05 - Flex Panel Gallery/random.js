
//  function getRandom(min,max, count) {
//     for (var i=0 ; i<count ; i++ ){
//         return Math.floor(math.random()*(max - min + 1))+min;
//     }
//  }


 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
console.log(getRndInteger(1,55))