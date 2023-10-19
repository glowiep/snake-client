const IP = "localhost";
const PORT = 50541;

const CONNECT_MSG = "Successfully connected to game server";
const EXIT_MSG = "you ded cuz you idled";

const USERNAME = "GL";

const CANNED_MSG = {
  m: "How are you?",
  "," : "I'm winning!",
  n: "You're winning!",
  k: "This is fun!"
};

const MOVE_KEY = {
  w: "up",
  a: "left",
  s: "down",
  d: "right",
  '\u001B\u005B\u0041': "up",
  '\u001B\u005B\u0044': "left",
  '\u001B\u005B\u0042': "down",
  '\u001B\u005B\u0043':"right"
};

module.exports = {
  IP,
  PORT,
  CONNECT_MSG,
  EXIT_MSG,
  USERNAME,
  CANNED_MSG,
  MOVE_KEY
};
