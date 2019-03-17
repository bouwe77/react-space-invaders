import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Animation />
      </div>
    );
  }
}

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //angle: 0,
      player: { x: 0, y: 0, width: 10, height: 10 }
    };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState(prevState => ({
      player: {
        x: prevState.player.x + 1,
        y: prevState.player.y,
        width: prevState.player.width,
        height: prevState.player.height
      }
    }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas player={this.state.player} />;
  }
}

class Canvas extends React.Component {
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

class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        width="300"
        height="300"
        ref={node =>
          node ? this.props.contextRef(node.getContext("2d")) : null
        }
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
