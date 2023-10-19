const net = require("net");
const {IP, PORT, CONNECT_MSG, EXIT_MSG, USERNAME} = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  // Display pre-defined user initials upon connect
  conn.on("connect", () => {
    console.log(CONNECT_MSG);
    conn.write(`Name: ${USERNAME}`);
  });

  conn.on("data", () => {
    console.log(EXIT_MSG);
    process.exit();
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};