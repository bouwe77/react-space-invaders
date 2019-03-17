import React from "react";

import PureCanvas from "./PureCanvas";

export default class Canvas extends React.Component {
  saveContext = ctx => {
    this.ctx = ctx;
  };

  componentDidUpdate() {
    const { player } = this.props;
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.fillStyle = "#4397AC";
    this.ctx.fillRect(player.x, player.y, player.width, player.height);
    this.ctx.restore();
  }

  render() {
    return <PureCanvas contextRef={this.saveContext} />;
  }
}
