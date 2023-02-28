const Movies = require('../models/movies.models')

const findAllMovies = async () => {
    const data = await Movies.findAll()
    return data
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: UUID.v4(),
        title: movieObj.title,
        synopsis: movieObj.synopsis,
        releaseYear: movieObj.releaseYear,
        director: movieObj.director,
        duration: movieObj.duration,
        trillerUrl: movieObj.trillerUrl,
        coverUrl: movieObj.coverUrl,
        movieUrl: movieObj.movieObj,
        classification: movieObj.classification,
        rating: movieObj.rating
    }
    const data = await Movies.create(newMovie)
    return data
}

module.exports = {
    findAllMovies,
    createMovie
}