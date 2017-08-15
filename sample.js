const TvMaze = require('./dist/').default;

const tvmaze = new TvMaze();

const stripHTML = html =>
  html && html.replace(/<(?:.|\n)*?>/gm, '') || null;

tvmaze
  .searchShow('game of thrones')
  .then(console.log.bind(console));
