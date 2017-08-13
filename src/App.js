import React, { Component } from "react";
import Presenter from "@snakesilk/react-presenter";
import { ProgressBar } from "@snakesilk/react-loader-progress";
import { initialize } from "./game";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.loader = initialize();
  }

  routeInput(key, state) {
    this.loader.game.input.trigger(
      key.toLowerCase(),
      state ? "keydown" : "keyup"
    );
  }

  render() {
    return (
      <div className="App">
        <Presenter
          game={this.loader.game}
          aspectRatio={16 / 9}
          fillWindow
          videoOverlay={<ProgressBar loader={this.loader} />}
        />
      </div>
    );
  }
}

export default App;
