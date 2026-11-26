import React from 'react';

function Article({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
      <small>{article.date}</small>
      <p>{article.preview}</p>
    </article>
  );
}

export default Article;