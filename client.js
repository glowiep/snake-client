const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GLO");
  });

  conn.on("data", () => {
    console.log("you ded cuz you idled");
    process.exit();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};