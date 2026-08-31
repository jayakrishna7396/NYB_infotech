import React, { PureComponent } from "react";

class PureStudent extends PureComponent {

  render() {

    console.log("Pure Component Rendered");

    return (
      <div className="card">
        <h2>Pure Component</h2>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PureStudent;