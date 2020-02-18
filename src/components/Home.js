import React from 'react'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import text from '../articles/home'
import './stylesheets/Home.css'

function Home({ articles, setSingleArticle, setCategory }) {

  return (
    <React.Fragment>

      <MenuBar />

      <div id='homeContiner'>
        <p id='homeText'>{text.home}</p>

        {articles.map(article => (
          article.featured === true && (
            <ArticleSmall
              setSingleArticle={setSingleArticle}
              setCategory={setCategory}
              articleToSingle={article}
              articles={articles}
              image={article.image}
              title={article.title}
              category={article.category}
              date={article.date}
              short={article.short}
            />
          )
        ))}

      </div>

    </React.Fragment >
  )
}

export default Home