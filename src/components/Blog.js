import React, { useState } from 'react';
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import articles from '../articles/articles'



function Blog() {
  const [singleArticleView, setSingleArticleView] = useState([])

  return (
    <React.Fragment>

      <MenuBar />

      {singleArticleView ?
        console.log('State Is empty') :
        console.log('An article is in state')
      }

      <div style={{ marginTop: 120 + 'px' }}>
        {articles.map(article => (
          <ArticleSmall
            key={article.id}
            setSingleArticleView={setSingleArticleView}
            article={article}
            image={article.image}
            title={article.title}
            date={article.date}
            short={article.short}
          />
        ))}
      </div>

    </React.Fragment>
  );
}

export default Blog