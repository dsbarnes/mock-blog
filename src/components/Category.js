import React from 'react'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import './stylesheets/Category.css'

function Category({ category, setSingleArticle, setCategory }) {
  return (
    <React.Fragment>
      <MenuBar />
      <div id='categoryContainer'>

        {category.length === 0 ? (
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
            category.map(article => (
              <ArticleSmall
                setSingleArticle={setSingleArticle}
                setCategory={setCategory}
                articleToSingle={article}
                key={article.id}
                image={article.image}
                title={article.title}
                category={article.category}
                date={article.date}
                short={article.short}
              />
            ))
          )}
      </div>
    </React.Fragment >
  )
}

export default Category