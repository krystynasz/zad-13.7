//var os = require('os');
/*var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});



process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        /* if (instruction === '/exit') {
             process.stdout.write('Quitting app!\n');
             process.exit();
         } else if
         (instruction === '/version') {
             process.stdout.write('The system language: ' + process.env.LANG + '\nThe node version: ' + process.versions.node + '\n');
         }
         else {
             process.stderr.write('Wrong instruction!\n');
         }
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            case '/version':
                process.stdout.write('The system language: ' + process.env.LANG + '\nThe node version: ' + process.versions.node + '\n');
                break;

            case '/getOSinfo':
            OSinfo.print();
                //getOSinfo();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
        emitter.emit('afterCommand');
    }
});*/

/*function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}*/

var fs = require('fs');

/*var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data);
});
fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});*/

var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

fs.readdir('../13.7', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('catalog.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });