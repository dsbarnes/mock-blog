import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import articles from './articles/articles'

import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import ArticleFull from './components/ArticleFull'
import Category from './components/Category'


function App() {

  const [singleArticle, setSingleArticle] = useState([
    { 'category': '', 'image': '', 'title': '', 'date': '', 'content': [] }
  ])
  const [category, setCategory] = useState([])

  return (
    <React.Fragment>
      <Router>
        <Switch>

          <Route path='/' exact component={Home} />

          <Route path='/blog' exact
            render={() => (
              <Blog
                articles={[...articles]}
                setSingleArticle={setSingleArticle}
                setCategory={setCategory}
              />
            )} />

          <Route path='/about' exact component={About} />

          <Route path='/blog/:title' exact
            render={() => (
              <ArticleFull
                article={singleArticle}
                setCategory={setCategory}
              />
            )}
          />

          <Route path='/blog/category/:category' exact
            render={() => (
              <Category
                category={category}
                setSingleArticle={setSingleArticle}
                setCategory={setCategory}
              />
            )}
          />

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App