const {CANNED_MSG, MOVE_KEY} = require("./constants");

// Stores the active TCP connection object.
let connection;

// Setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // If the user exists with ctrl + c
  const handleUserInput = function(inputKey) {
    if (inputKey === '\u0003') {
      console.log("Thank you for playing!");
      process.exit();
    }

    // Send the string "Move: __" as data to the server via the conn object.
    if (MOVE_KEY[inputKey]) {
      conn.write(`Move: ${MOVE_KEY[inputKey]}`);
    }
    
    // Logic for canned messages
    if (CANNED_MSG[inputKey]) {
      setTimeout(() => {
        conn.write(`Say: ${CANNED_MSG[inputKey]}`);
      }, 1000);
    }
  };
  
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};