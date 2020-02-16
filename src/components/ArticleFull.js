import React from 'react';
// import './stylesheets/ArticleSmall.css'
import { Link } from 'react-router-dom'

function ArticleFull(
  //Don't freak, just split the line
  //to see all the destructured bits of props.
  { image, title, date, content, category }) {
  return (
    <React.Fragment>
      <article id='article'>
        <img
          alt="todo"
          // style={{
          //   height: 165 + 'px',
          //   width: 280 + 'px'
          // }}
          src={image}></img>

        <div id="titleDate">
          <h1>{title}</h1>
          <p><small><i>{date}</i></small></p>
        </div>

        <p id='articleContent'>{content}</p>
      </article>
    </React.Fragment>
  );
}

export default ArticleFull;