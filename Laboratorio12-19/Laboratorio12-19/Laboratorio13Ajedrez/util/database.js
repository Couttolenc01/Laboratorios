const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lol23',
  database: 'chessGames',
  port: 8889
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base: ' + err.stack);
    return;
  }
  console.log('Conectado a la base.');
});

module.exports = connection;
