import React from "react";
import List from "./List";
import Form from "./Form";
import Posts from "./Posts";

const App = () => {
  return (
    <div>
      <div>
        <h2>Articles</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
      <div>
        <h2>Articles from API</h2>
        <Posts />
      </div>
    </div>
  );
};

export default App;
