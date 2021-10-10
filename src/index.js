import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import index from "./js/index";

// test store's methods in browser's console
// store.subscribe(() => console.log('Look ma, Redux!!'));
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
// store.getState();
