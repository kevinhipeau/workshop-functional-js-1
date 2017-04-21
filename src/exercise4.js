const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promiseNumbers = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, [100 , 100, 200, 300, 500])
})

var promiseStrings = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 2000, ['1' , 'un', '2', '3', 'cinq'])
})

const asyncYolo = (input) => {
  Promise.all([promiseStrings, promiseNumbers]).then(values => {
    var all  = values[0].filter((va) => parseInt(va))
    var cal  = values[1].slice(0,all.length).map(function(x,i) {
      return x + parseInt(all[i]);
    });
    input(cal);
  });
}

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}
