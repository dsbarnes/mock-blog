import React from 'react';
import './stylesheets/ArticleSmall.css'

function ArticleSmall(
  { setSingleArticleView, image, title, date, short, article }) {
  return (
    <React.Fragment>
      <article id='article'>
        <img
          alt="todo"
          style={{
            height: 165 + 'px',
            width: 280 + 'px'
          }}
          src={image}></img>

        <div id="titleDate">

          <h1 onClick={() => setSingleArticleView([article])}>
            {title}
          </h1>
          <p><small><i>{date}</i></small></p>
        </div>

        <p id='articleShort'>{short}</p>
      </article>
    </React.Fragment>
  );
}

export default ArticleSmall;