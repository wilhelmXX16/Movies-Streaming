const Movies = require('../models/movies.models')
const MovieGenres = require('../models/movieGenres.models')
const uuid = require('uuid')


const findAllMovies = async (limit, offset ) => {
    // limit -> cuantos quiero mostrar
    // offset -> donde empiezo a mostrar


    const queryOptions = {
        limit: limit || 20,
        offset: offset || 0
    }

    const data = await Movies.findAndCountAll(queryOptions)
    return data
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: uuid.v4(),
        title: movieObj.title,
        synopsis : movieObj.synopsis,
        releaseYear: movieObj.releaseYear,
        director: movieObj.director,
        duration: movieObj.duration,
        trillerUrl: movieObj.trillerUrl,
        coverUrl: movieObj.coverUrl,
        movieUrl: movieObj.movieUrl,
        classification: movieObj.classification,
        rating: movieObj.rating
    }
    const data = await Movies.create(newMovie)
    return data
}

const addGenreToMovie = async (dataObj) => {
    const data = await MovieGenres.create({
        id: uuid.v4(),
        movieId: dataObj.movieId,
        genreId: dataObj.genreId
    })
    return data
}

//esto es para el filtro por generos
const findAllMoviesByGenre = async (genreId) => {
    const data = await Movies.findAll({
        include: {
            model: Genres,
            where: {
                id: genreId
            }
        }
    })
    return data
}

module.exports = {
    findAllMovies,
    createMovie,
    addGenreToMovie,
    findAllMoviesByGenre
}