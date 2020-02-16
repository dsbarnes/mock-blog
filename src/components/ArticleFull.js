import React from 'react';
import './stylesheets/ArticleFull.css'

function ArticleFull(
  //Don't freak, just split the line
  //to see all the destructured bits of props.
  { image, title, date, content, category }) {
  return (
    <React.Fragment>


      <article id='articleFull'>
        <img id='articleFullImg'
          alt="todo"
          style={{
            height: 240 + 'px',
            width: 750 + 'px',
            border: 1 + 'px solid blue',
          }}
          src={image}>
        </img>

        <h1 id='articleFullTitle'>{title}</h1>

        <p className='articleFullSpecialPosition'>
          <small><span className='color'>Category: </span>
            {category}</small></p>

        <p className='articleFullSpecialPosition'>
          <small><i><span className='color'>Posted: </span>
            {date}</i></small></p>

        {content.map(text => (
          text.text ?
            (<p id='articleFullP'>{text.text}</p>) :
            (<pre id='articleFullCode'>{text.code}</pre>)

        ))}
      </article>
    </React.Fragment >
  );
}

export default ArticleFull;