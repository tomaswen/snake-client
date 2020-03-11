let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    else if (key === 'w') {
      
      setInterval(() => conn.write('Move: up'), 500)
    }
    else if (key === 'a') {
      
      setInterval(() => conn.write('Move: left'), 500)
    }
    else if (key === 's') {
      
      setInterval(() => conn.write('Move: down'), 500)
    }
    else if (key === 'd') {
      
      setInterval(() => conn.write('Move: right'), 500)
    }
    else if (key === 'l') {
      conn.write('Say: Lost')
    }
  })
  return stdin;
}

module.exports = {setupInput}