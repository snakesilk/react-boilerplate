const { Game, Loader } = require("@snakesilk/engine");

function initialize() {
  const game = new Game();
  const loader = new Loader(game);
  return loader;
}

module.exports = {
  initialize,
};
