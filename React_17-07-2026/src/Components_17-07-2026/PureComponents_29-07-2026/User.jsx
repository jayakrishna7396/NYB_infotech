import React from "react";

class User extends React.PureComponent {
  render() {
    console.log("User Component Rendered");

    return (
      <div>
        <h2>User Information</h2>
        <p>Details:{this.props.details}</p>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>

        <h2>krishnaDetails</h2>
        <p>Name: krishna</p>
        <p>Age:25</p>
        <p>Place:Hyd</p>

        <h2>Bharadawaja Deatils</h2>
        <p>Name: Bharadawaja</p>
        <p>Age:4</p>
        <p>Place: Rjy</p>
      </div>
    );
  }
}

export default User;