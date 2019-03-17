import React from "react";

import Canvas from "./Canvas";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: { x: 0, y: 0, width: 10, height: 10 }
    };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState = () => {
    this.setState(prevState => ({
      player: {
        x: prevState.player.x + 1,
        y: prevState.player.y,
        width: prevState.player.width,
        height: prevState.player.height
      }
    }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    var sprites = [this.state.player];

    return <Canvas sprites={sprites} />;
  }
}
