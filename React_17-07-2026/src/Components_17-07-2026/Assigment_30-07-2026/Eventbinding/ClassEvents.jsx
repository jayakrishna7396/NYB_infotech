import React, { Component } from "react";

class ClassEvents extends Component {
constructor(props) {
super(props);


this.state = {
  message: "No event occurred",
};

// Bind method to class instance
this.handleClick = this.handleClick.bind(this);


}

handleClick() {
this.setState({
message: "Button clicked in Class Component!",
});
}

handleFocus() {
this.setState({
message: "Input is focused!",
});
}

handleBlur() {
this.setState({
message: "Input lost focus!",
});
}

render() {
return ( <div className="card"> 
<h2>Class Component Events</h2>


    <p>{this.state.message}</p>

    <button onClick={this.handleClick}>
      Click Button
    </button>

    <br />
    <br />

    <input
      type="text"
      placeholder="Focus on this input"
      onFocus={() => this.handleFocus()}
      onBlur={() => this.handleBlur()}
    />
  </div>
);


}
}

export default ClassEvents;
