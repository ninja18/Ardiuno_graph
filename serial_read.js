var serialport = require("serialport");
var port = new serialport('COM3',{
baudRate: 9600
});
port.on('open',function(err){
console.log("opening success");
port.on('data',function(data){
console.log(data.toString('utf8'));
});
});
port.on('error', function(err) {
  console.log('Error: ', err.message);
});
