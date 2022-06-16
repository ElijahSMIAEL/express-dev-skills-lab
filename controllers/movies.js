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

function show(req, res) {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('movies/show', {
      movie: movie
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.id)
  .then(movie => {
    res.redirect('/movies')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

function edit(req, res) {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render('movies/edit', {
      movie: movie
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/movies')
  })
}

function update(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(movie => {
    res.redirect(`/movies/${movie._id}`)
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
  show,
  deleteMovie as delete,
  edit,
  update
}