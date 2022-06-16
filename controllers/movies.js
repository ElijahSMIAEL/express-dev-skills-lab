import { movies } from '../data/movies-data.js'

function index(req, res) {
  res.render('movies/index', {
    movies: movies
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
}