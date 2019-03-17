import React from "react";

export default class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        width="600"
        height="600"
        ref={node =>
          node ? this.props.contextRef(node.getContext("2d")) : null
        }
      />
    );
  }
}
