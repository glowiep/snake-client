const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })

  //const directions = ["Move: up", "Move: down", "Move: left", "Move: right"];
  conn.on("connect", () => {
    conn.write("Name: GLO");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 2000) 
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000) 
    
  })

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};