import React from "react";

import Canvas from "./Canvas";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: { x: 0, y: 0, width: 10, height: 10, color: "yellow" },
      enemies: [
        { x: 10, y: 10, width: 15, height: 5, color: "red" },
        { x: 50, y: 16, width: 20, height: 12, color: "green" }
      ]
    };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState = () => {
    this.setState(prevState => ({
      player: {
        x: prevState.player.x + 0.5,
        y: prevState.player.y,
        width: prevState.player.width,
        height: prevState.player.height,
        color: this.state.player.color
      }
    }));
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
