const net = require('net');
const { IP, PORT} = require('./constants')
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: TOM');
    // setInterval(() => conn.write('Move: up'), 50)
    

  })

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = {connect}