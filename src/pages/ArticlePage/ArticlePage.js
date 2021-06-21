import './ArticlePage.css';
import React from "react";
import writing from "../../data/writing"
import {
  useParams
} from "react-router-dom";

function ArticlePage() {

  let { articleId } = useParams();

  let article = writing.find(item => {
    return item.id === articleId
  })

  return (
    <div className="Article">
        ARTICLE PAGE
        <h1>{article.title}</h1>
        <img src={require(`../../assets/images/${article.src}`).default} alt={article.title}></img>
        <p>{article.text}</p>
    </div>
  );
}

export default ArticlePage;