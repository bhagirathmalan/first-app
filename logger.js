console.log(_filename);
console.log(_dirname);

var url = 'http://mylogger.io/log';


function log(message) {

    console.log(message);
}
module.exports.log = log;