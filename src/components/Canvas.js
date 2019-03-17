import React from "react";

import PureCanvas from "./PureCanvas";

export default class Canvas extends React.Component {
  saveContext = ctx => {
    this.ctx = ctx;
  };

  componentDidUpdate() {
    const { sprites } = this.props;

    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < sprites.length; i++) {
      this.ctx.fillStyle = sprites[i].color;
      this.ctx.fillRect(
        sprites[i].x,
        sprites[i].y,
        sprites[i].width,
        sprites[i].height
      );
    }

    //  this.ctx.fillStyle = "red";
    // this.ctx.fillRect(sprites[0].x, sprites[0].y, sprites[0].width, sprites[0].height);
    //  this.ctx.fillStyle = "blue";
    // this.ctx.fillRect(
    //   sprites[1].x + 30,
    //   sprites[1].y + 50,
    //   sprites[1].width,
    //   sprites[1].height
    // );

    this.ctx.restore();
  }

  render() {
    return <PureCanvas contextRef={this.saveContext} />;
  }
}
