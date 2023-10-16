// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(connection) {
    if (connection === '\u0003') {
      process.exit();
    }

    // Send the string "Move: up" as data to the server via the conn object.
    if (connection === 'w') {
      setTimeout(() => {
        conn.write("Move: up");
      }, 1000);
    }

    if (connection === 'a') {
      setTimeout(() => {
        conn.write("Move: left");
      }, 1000);
    }

    if (connection === 's') {
      setTimeout(() => {
        conn.write("Move: down");
      }, 1000);
    }

    if (connection === 'd') {
      setTimeout(() => {
        conn.write("Move: right");
      }, 1000);
    }
    
    // Add canned messages
    if (connection === 'm') {
      setTimeout(() => {
        conn.write("Say: How are you?");
      }, 1000);
    }

    if (connection === ',') {
      setTimeout(() => {
        conn.write("Say: I'm winning!");
      }, 1000);
    }

    if (connection === 'n') {
      setTimeout(() => {
        conn.write("Say: You're winning!");
      }, 1000);
    }
  };
  
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};