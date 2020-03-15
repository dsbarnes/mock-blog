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

  const iconStyle = {
    'position': 'relative',
    'top': 30 + 'px',
  }
  let specialStyle = {
    'position': 'relative',
    'margin-left': 75 + 'px',
    'bottom': 35 + 'px'
  }

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
              style={iconStyle}
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="fab fa-python fa-4x"></i>}

            {category === 'env' && <i
              style={iconStyle}
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="far fa-folder-open fa-4x"></i>}

            {category === 'Katas' && <i
              style={iconStyle}
              onClick={() => setCategory(articles.filter(article => article.category === category))}
              className="fas fa-puzzle-piece fa-4x"></i>}

          </Link>

          <h1 id='articleFullTitle'>{title}</h1>

          <p style={specialStyle}>
            <small>
              <span className='color'><i>Posted: &nbsp;</i></span>
              <i>{date}</i>
            </small>
          </p>

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