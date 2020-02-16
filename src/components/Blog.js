import React from 'react'
// import articles from '../articles/articles'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'



function Blog({ articles, setSingleArticle }) {
  return (
    <React.Fragment>
      <MenuBar />

      <div style={{ marginTop: 120 + 'px' }}>
        {articles.map(article => (
          <ArticleSmall
            setSingleArticle={setSingleArticle}
            articleToSingle={article}
            key={article.id}
            image={article.image}
            title={article.title}
            category={article.category}
            date={article.date}
            short={article.short}
          />
        ))}
      </div>

    </React.Fragment>
  );
}

export default Blog