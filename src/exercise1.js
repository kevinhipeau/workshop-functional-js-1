const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {

  input.reduce(function(accumulateur, valeurCourante, index, array){
     accumulateur.push([])
     for (var i = 0; i < array.length; i++) {
       if (array[i].length >= index) {
          for (var j = 0; j < index;j++) {
             console.log(accumulateur[accumulateur.length-1]);
             accumulateur[accumulateur.length-1].push(array[i][j]);
          }
       }
     }

   return accumulateur;

},[]);

}
console.log(zip([['a', 'b'], [1], [true, false, false]]));
module.exports = {
  zip: zip,
  run: zip
}
