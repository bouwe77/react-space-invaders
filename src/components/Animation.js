import React from "react";

import player from "../logic/player";
import enemies from "../logic/enemies";

import Canvas from "./Canvas";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.player = new player();
    this.enemies = new enemies(100);

    this.state = {
      player: this.player.getPlayer(),
      enemies: this.enemies.getUpdatedEnemies()
    };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState = () => {
    this.setState(prevState => ({ enemies: this.enemies.getUpdatedEnemies() }));

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    var sprites = [this.state.player, ...this.state.enemies];

    return <Canvas sprites={sprites} />;
  }
}
