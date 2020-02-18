import React from 'react';
import { Link } from 'react-router-dom'
import './stylesheets/ArticleFull.css'
import MenuBar from './MenuBar'
import ErrorMessage from './ErrorMessge';
import BottomSection from './BottomSection'

function ArticleFull({ article, articles, setCategory }) {
  if (!article[0]) return (<ErrorMessage />)

  const { category, title, date, content } = article[0]
  localStorage.setItem('dsBarnesBlogArticle', JSON.stringify(article[0]))

  return (
    <React.Fragment>
      <MenuBar />

      {article.map(article => (
        <article id='articleFull'>
          <Link to={`/blog/category/${category}`}>

            {category === 'JavaScript' && <i
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="fab fa-js-square fa-4x"></i>}

            {category === 'Python' && <i
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="fab fa-python fa-4x"></i>}

            {category === 'env' && <i
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="fas fa-laptop-code fa-3x"></i>}

            {category === 'Katas' && <i
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="fas fa-user-ninja fa-3x"></i>}

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
      ))}
      <BottomSection />
    </React.Fragment >
  );
}

export default ArticleFull;