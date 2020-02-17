import React from 'react'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import './stylesheets/Category.css'

function Category(
  { articles, category,
    setSingleArticle, setCategory }) {

  localStorage.setItem('dsBarnesBlogCategory', JSON.stringify(category))

  return (
    <React.Fragment>
      <MenuBar />
      <div id='categoryContainer'>

        {category.length === 0 ? (
          <article id="articleFull">
            <h1>Oh no!</h1>
            <br />
            <p>If you attempted to access a page by using the address bar,</p>
            <p>please navigate to the blog and find the category there.</p>
            <br />
            <p>If you got here some other way,</p>
            <p>it's most likely this page doesn't exist.</p>
          </article>
        ) : (
            category.map(article => (
              <ArticleSmall
                setCategory={setCategory}
                setSingleArticle={setSingleArticle}
                articleToSingle={article}
                articles={articles}
                key={article.id}
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