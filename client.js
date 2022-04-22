const net = require("net");
const {IP, PORT, PLAYER_NAME} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // to setup a name for my snake
  conn.on('connect', () =>{
    conn.write(PLAYER_NAME);
  });

  // to display text, short chat bubbles
  conn.on('connect', () =>{
    conn.write("Say: Hello All");
  });

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;