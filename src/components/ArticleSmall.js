import React from 'react';
import './stylesheets/ArticleSmall.css'

function ArticleSmall(
  { setSingleArticle, image, title, category, date, short, article }) {
  return (
    <React.Fragment>
      <article
        id='articleSmall'
        onClick={() => setSingleArticle([article])}
      >
        <img id='articleSmallImg'
          alt="todo"
          style={{
            height: 165 + 'px',
            width: 280 + 'px'
          }}
          src={image}>
        </img>

        <div id="titleDate">
          <h1>{title}</h1>
          <p className='articleFullSpecialPosition'>
            <small><i><span className='color'>Category: </span>
              {category}</i></small></p>

          <p className='articleFullSpecialPosition'>
            <small><i><span className='color'>Posted: </span>
              {date}</i></small></p>

        </div>

        <p id='articleShort'>{short}</p>
      </article>
    </React.Fragment>
  );
}

export default ArticleSmall;