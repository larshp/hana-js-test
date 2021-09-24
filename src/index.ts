const hdb = require('hdb');
require('dotenv').config();

var client = hdb.createClient({
  host     : process.env.DB_HOST,
  port     : 443,
  user     : 'DBADMIN',
  password : process.env.DB_PASS,
//  initializationTimeout: 150000,
  useCesu8 : false
});

function onError(err: any) {
  console.error('Network connection error', err);
}
client.on('error', onError);

function onClose() {
  console.log('Client closed');
}
client.on('close', onClose);

function onConnect() {
  console.log('Client connected');
}
client.on('connect', onConnect);

function callback(foo: any, bar: any) {
  console.dir(foo);
  console.dir(bar);
}

client.connect(callback);
console.dir("hello world");

/*
require('dotenv').config();
var hana = require("@sap/hana-client");

var connOptions = {
  serverNode: process.env.DB_HOST + ":443",
  encrypt: "true",
  sslValidateCertificate: "false",
  uid: "DBADMIN",
  pwd: process.env.DB_PASS,
};

var dbConnection = hana.createConnection();

dbConnection.connect(connOptions, function (err: any) {
  if (err) throw err;
  dbConnection.exec(
    "SELECT * FROM TRAVEL.ROOM",
    function (err: any, result: any) {
      if (err) throw err;
      console.log(result[0]);
      dbConnection.disconnect();
    }
  );
});
*/