import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        {this.props.post} <br />
        {this.props.publishedOn} <br />
        {this.props.postedBy} <br />
        {this.props.seen}
      </div>
    );
  }
}

export default Child;
