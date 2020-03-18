import React from 'react';
import { Link } from 'react-router-dom'
import './stylesheets/ArticleFull.css'
import MenuBar from './MenuBar'
import ErrorMessage from './ErrorMessge';
import BottomSection from './BottomSection'

//Icons
import bash from '../static/Bash.svg'
import cSharp from '../static/CSharp.svg'
import rust from '../static/Rust.svg'
import env from '../static/Env.svg'
import kata from '../static/Kata.svg'
import javascript from '../static/JavaScript.svg'
import python from '../static/Python.svg'

console.log(bash)

function ArticleFull({ article, articles, setCategory }) {
  if (!article[0]) return (<ErrorMessage />)

  const { category, title, date, content } = article[0]
  localStorage.setItem('dsBarnesBlogArticle', JSON.stringify(article[0]))

  // let specialStyle = {
  //   'position': 'relative',
  //   'margin-left': 75 + 'px',
  //   'bottom': 35 + 'px'
  // }

  return (
    <React.Fragment>
      <MenuBar />


      {article.map(article => (
        <article id='articleFull'>
          <div id='articleHead'>
            <Link to={`/blog/category/${category}`}>

              {category === 'JavaScript' && //<i
                // onClick={() => setCategory(articles.filter(article => article.category === category))}
                // className="fab fa-js-square fa-4x"></i>
                <img
                  class='largeIcon'
                  alt='JvaScript Icon'
                  src={javascript}
                  onClick={() => setCategory(articles.filter(article => article.category === category))}
                />
              }

              {category === 'Python' &&
                <img
                  class='largeIcon'
                  alt='Python Icon'
                  src={python}
                  onClick={() => setCategory(articles.filter(article => article.category === category))}
                />
              }

              {category === 'env' &&
                <img
                  class='largeIcon'
                  alt='Gears Icon'
                  src={env}
                  onClick={() => setCategory(articles.filter(article => article.category === category))}
                />
              }

              {category === 'Katas' &&
                <img
                  class='largeIcon'
                  alt='erwefs'
                  src={kata}
                  onClick={() => setCategory(articles.filter(article => article.category === category))}
                />
              }

            </Link>
            <div>
              <h1 id='articleFullTitle'>{title}</h1>
              <p id='datePosition'>
                <small>
                  <span className='color'><i>Posted: &nbsp;</i></span>
                  <i>{date}</i>
                </small>
              </p>
            </div>


          </div>

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