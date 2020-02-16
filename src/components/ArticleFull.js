import React from 'react';
import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'
import './stylesheets/ArticleFull.css'


function ArticleFull(props) {
  return (
    <React.Fragment>
      <MenuBar />

      {props.article.map(article => (
        <article id='articleFull'>

          <Link to={`/blog/category/${article.category}`}>
            <img id='articleFullImg'
              alt="todo"
              style={{
                border: 1 + 'px solid blue',
              }}
              src={article.image}>
            </img>
          </Link>

          <h1 id='articleFullTitle'>{article.title}</h1>

          <p className='articleFullSpecialPosition'>
            <small><i><span className='color'>Posted: </span>
              {article.date}</i></small></p>

          {
            article.content.map(text => (
              text.text ?
                (<p id='articleFullP'>{text.text}</p>) :
                (<pre id='articleFullCode'>{text.code}</pre>)
            ))
          }

        </article>
      ))
      }
    </React.Fragment >
  );
}

export default ArticleFull;