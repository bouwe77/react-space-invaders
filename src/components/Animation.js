import React from "react";

import enemies from "../logic/enemies";

import Canvas from "./Canvas";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.enemies = new enemies(300);

    this.state = {
      player: { x: 200, y: 380, width: 30, height: 15, color: "black" },
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
