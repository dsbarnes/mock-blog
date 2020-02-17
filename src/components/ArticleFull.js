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

              <Link to={`/blog/category/${article.category}`}>
                <img id='articleFullImg'
                  alt="todo"
                  style={{ border: 1 + 'px solid blue' }}
                  src={image}
                  onClick={() => (
                    setCategory(
                      articles.filter(article => article.category === category)
                    ))}>
                </img>
              </Link>

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