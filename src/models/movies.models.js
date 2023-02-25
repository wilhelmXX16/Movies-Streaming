const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Movies = db.define("movies", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    traillerUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    movieUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    clasification: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Movies