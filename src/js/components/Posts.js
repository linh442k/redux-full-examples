import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const Posts = (props) => {
  useEffect(
    () => props.getData("https://jsonplaceholder.typicode.com/posts"),
    []
  );
  return (
    <ul>
      {props.articles.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.remoteArticles.slice(0, 10),
  };
};

export default connect(mapStateToProps, { getData })(Posts);
