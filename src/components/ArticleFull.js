import React from 'react';
import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'
import articles from '../articles/articles'
import './stylesheets/ArticleFull.css'

function ArticleFull({ article, setCategory }) {
  const { image, category, title, date, content } = article[0]

  return (
    <React.Fragment>
      <MenuBar />

      {!title ? (
        <article id="articleFull">
          <h1>Oh no!</h1>
          <br />
          <p>If you attempted to access a page by using the address bar,</p>
          <p>please navigate to the blog and find the article there.</p>
          <br />
          <p>If you got here some other way,</p>
          <p>it's most likely this page doesn't exist.</p>
        </article>
      ) : (
          article.map(article => (
            <article id='articleFull'>

              {category === 'JavaScript' && <i class="fab fa-js-square fa-4x"></i>}
              {category === 'Python' && <i class="fab fa-python fa-4x"></i>}
              {category === 'env' && <i class="fab fa-laptop-code fa-4x"></i>}

              <h1 id='articleFullTitle'>{title}</h1>

              <p className='articleFullSpecialPosition'>
                <small><i><span className='color'>Posted: </span>
                  {date}</i></small></p>

              {content.map(text => (
                text.text ?
                  (<p id='articleFullP'>{text.text}</p>) :
                  (<pre id='articleFullCode'>{text.code}</pre>)
              ))}

            </article>
          ))
        )}


    </React.Fragment >
  );
}

export default ArticleFull;