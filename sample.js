const TVMaze = require('./index');

TVMaze
  .singleSearchShow(
    'game of thrones',
    ['nextepisode', 'previousepisode']
  )
  .then(show =>
    TVMaze.stripHTML(show.summary)
  )
  .then(console.log.bind(console));
