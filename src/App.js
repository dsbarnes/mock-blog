import React, { useState } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import articles from './articles/articles'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import ArticleFull from './components/ArticleFull'
import Category from './components/Category'
import ErrorMessge from './components/ErrorMessge'

function App() {


  const [singleArticle, setSingleArticle] = useState(
    [JSON.parse(localStorage.getItem('dsBarnesBlogArticle'))] || []
  )
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem('dsBarnesBlogCategory')) || []
  )

  return (
    <React.Fragment>
      {/* <Router> */}
      <HashRouter basename='/'>
        <Switch>

          <Route path='/' exact
            render={() => (
              <React.Fragment>
                <ScrollToTop />
                <Home
                  articles={articles}
                  setSingleArticle={setSingleArticle}
                  setCategory={setCategory}
                />
              </React.Fragment>
            )} />

          <Route path='/blog' exact
            render={() => (
              <React.Fragment>
                <ScrollToTop />
                <Blog
                  articles={[...articles]}
                  setSingleArticle={setSingleArticle}
                  setCategory={setCategory}
                />
              </React.Fragment>
            )} />

          <Route path='/about' exact
            render={() => (
              <React.Fragment>
                <ScrollToTop />
                <About />
              </React.Fragment>
            )}
          />

          <Route path='/blog/:title' exact
            render={() => (
              <React.Fragment>
                <ScrollToTop />
                <ArticleFull
                  article={singleArticle}
                  articles={articles}
                  setCategory={setCategory}
                />
              </React.Fragment>
            )}
          />

          <Route path='/blog/category/:category' exact
            render={() => (
              <React.Fragment>
                <ScrollToTop />
                <Category
                  category={category}
                  setSingleArticle={setSingleArticle}
                  setCategory={setCategory}
                />
              </React.Fragment>
            )}
          />

          <Route path='/:always_error' exact
            render={() => <ErrorMessge />}
          />

        </Switch>
      </HashRouter>
      {/* </Router> */}
    </React.Fragment>
  );
}

export default App