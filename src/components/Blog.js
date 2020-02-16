import React, { useState } from 'react';
import articles from '../articles/articles'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import ArticleFull from './ArticleFull'



function Blog() {
  //TODO: useState([]) -- THIS IS FOR DEV PURPOSES!! CHANGE IT!
  const [singleArticle, setSingleArticle] = useState([])

  return (
    <React.Fragment>

      <MenuBar setSingleArticle={setSingleArticle} />

      <div style={{ marginTop: 120 + 'px' }}>

        {singleArticle.length === 0 ?
          (
            articles.map(article => (
              <ArticleSmall
                key={article.id}
                setSingleArticle={setSingleArticle}
                article={article}
                image={article.image}
                title={article.title}
                category={article.category}
                date={article.date}
                short={article.short}
              />
            ))
          ) : (
            singleArticle.map(article => (
              <ArticleFull
                key={article.id}
                category={article.category}
                title={article.title}
                date={article.date}
                image={article.image}
                content={article.content}
              />
            ))
          )
        }
      </div>

    </React.Fragment>
  );
}

export default Blog