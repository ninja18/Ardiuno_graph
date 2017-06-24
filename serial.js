/*This module opens the serial port named and if there
 any data comes in it inserts it into the database
 it creates a database and a collection
 */
var serialport = require("serialport");
var serial_connect = require('./connect_db');
var collection_name = 'sensor';
//opens a serial port on COM4 with baudRate of 9600(default value too)
var port = new serialport('COM4',{
baudRate: 9600
});
port.on('open',function(err){
  if(err)
  throw err;
  //connects database and creates a collection
console.log("opening success");
serial_connect.connect(collection_name);
port.on('data',function(data){
//inserts the serial data
var temp = data.toString('utf8');
serial_connect.insert(collection_name,data = {value:temp.replace(/^\r\n+/," ")}); //problem: \r\n needs to be removed
});
});
port.on('error', function(err) {
  console.log('Error: ', err.message);
});
