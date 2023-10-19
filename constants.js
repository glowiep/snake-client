const IP = "localhost";
const PORT = 50541;

const CONNECT_MSG = "Successfully connected to game server";
const EXIT_MSG = "you ded cuz you idled";

const USERNAME = "GL";

const CANNED_MSG = {
  m: "Say: How are you?",
  "," : "Say: I'm winning!",
  n: "Say: You're winning!"
};

const MOVE_KEY = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  '\u001B\u005B\u0041': "Move: up",
  '\u001B\u005B\u0044': "Move: left",
  '\u001B\u005B\u0042': "Move: down",
  '\u001B\u005B\u0043':"Move: right"
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
