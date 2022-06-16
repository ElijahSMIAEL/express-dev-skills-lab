import mongoose from "mongoose"

const Schema = mongoose.Schema

const movieSchema = new Schema({
  name: String,
  year: String,
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}