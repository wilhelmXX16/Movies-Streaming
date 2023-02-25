const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Series = db.define('series',{
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
    clasification: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})
 module.exports = Series