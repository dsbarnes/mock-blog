import React from 'react'
import './stylesheets/Category.css'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import ErrorMessage from './ErrorMessge'
import BottomSection from './BottomSection'

function Category(
  { articles, category,
    setSingleArticle, setCategory }) {
  if (!category.length) return <ErrorMessage />

  localStorage.setItem('dsBarnesBlogCategory', JSON.stringify(category))

  return (
    <React.Fragment>
      <MenuBar />
      <div id='categoryContainer'>

        {category.map(article => (
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
        ))}
      </div>
      <BottomSection />
    </React.Fragment >
  )
}

export default Category