const IP = "localhost";
const PORT = 50541;

const CONNECT_MESSAGE = "Successfully connected to game server";
const EXIT_MESSAGE = "you ded cuz you idled"

const USERNAME = "GL"

const CANNED_MESSAGES = {
  m: "Say: How are you?",
  "," : "Say: I'm winning!",
  n: "Say: You're winning!"
}

const MOVE_KEY = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

module.exports = {
  IP,
  PORT,
  CONNECT_MESSAGE,
  EXIT_MESSAGE,
  USERNAME,
  CANNED_MESSAGES,
  MOVE_KEY
};
