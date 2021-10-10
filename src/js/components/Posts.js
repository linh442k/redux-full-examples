import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const Posts = (props) => {
  useEffect(() => props.getData(), []);
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
    articles: state.remoteArticles,
  };
};

export default connect(mapStateToProps, { getData })(Posts);
