import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";

class App extends Component {
  // need import component from react
  constructor(props) {
    super(props);
  }

  componentWillMount(props, state) {}

  componentDidMount(props, state) {
    console.log("Mounted With:", props, state);
  }
  render() {
    let name = "nick";

    const posts = [
      {
        post: "Somthing About Post",
        postedBy: "Admin",
        publishedOn: "march",
        seen: 45
      },
      {
        post: "Somthing About Post",
        postedBy: "Admin",
        publishedOn: "march",
        seen: 45
      },
      {
        post: "Somthing About Post",
        postedBy: "Admin",
        publishedOn: "march",
        seen: 45
      },
      {
        post: "Somthing About Post",
        postedBy: "Admin",
        publishedOn: "march",
        seen: 45
      }
    ];

    return (
      <div className="App">
        <h4> hello {name}</h4>
        {posts.map((item, i) => {
          return (
            <Child
              key={i}
              post={item.post}
              postedBy={item.postedBy}
              publishedOn={item.publishedOn}
              seen={item.seen}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
