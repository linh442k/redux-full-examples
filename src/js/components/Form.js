import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

const ConnectedForm = (props) => {
  const [article, setArticle] = useState({ title: "" });

  const handleInputChange = (event) => {
    setArticle({ [event.target.id]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { title } = article;
    props.addArticle({ title });
    setArticle({ title: "" });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={article.title}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
