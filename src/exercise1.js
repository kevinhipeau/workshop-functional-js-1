const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
  return input.reduce(function (accumulateur, array, i) {
    while (accumulateur.length < array.length) {
      accumulateur.push([]);
    }
    for (var j = 0; j < array.length; j++) {
      accumulateur[j][i] = array[j];
    }
    return accumulateur;
  }, []);
}

module.exports = {
  zip: zip,
  run: zip
}
