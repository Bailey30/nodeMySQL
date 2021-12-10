const sequelize = require("../db/connection")
const { DataTypes } = require("sequelize")
const { foreign_key } = require("inflection")

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER
    }
})


const Actor = sequelize.define("Actor", {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    gender: {
        type: DataTypes.STRING(1)
    },
    // CastId: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // }
})

const Cast = sequelize.define("Cast", {
    role: {
        type: DataTypes.STRING(225),
        allowNull: false,
    },
    actor_id: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: "actors",
        //     key: "id"
        // }
    },
    mov_id: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: "movies",
        //     key: "id"
        // }
    }
    
})
// Cast.hasMany(Actor, {foreignKey: "castId"})
// Movie.hasMany(Cast, {foreignKey: "id"})
// Movie.hasMany(Actor)
module.exports = { Movie, Actor, Cast };