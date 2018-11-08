var fs = require('fs');
var colors = require('colors');
var path = './';

fs.readdir(path, function (err, items) {
    console.log('Zapisuje liste elementow z katalogu do pliku cataloglist.txt'.blue);
    console.log(items);
    fs.writeFile('./cataloglist.txt', items, function (err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
    });
});