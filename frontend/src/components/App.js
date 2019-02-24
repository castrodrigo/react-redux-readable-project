import React from "react";
import List from "./Post/List";

const title = "Mock";
const posts = [
  {
    id: 123,
    timestamp: 0,
    title: "mock",
    body: "body",
    author: "author"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <List title={title} posts={posts} />
      </div>
    );
  }
}

export default App;
