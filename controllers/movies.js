import { Movie } from '../models/movie.js'

function index(req, res) {
  Movie.find({})
  .then(movies => {
    res.render('movies/index', {
      movies: movies
  })
})
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newMovie(req, res) {
  res.render('movies/new')
}

function create(req, res) {
  Movie.create(req.body)
  .then(movie => {
    console.log(movie)
    res.redirect('/movies')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

export {
  index,
  newMovie as new,
  create,
}