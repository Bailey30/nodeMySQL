// const { argsert } = require("yargs/build");
const { Movie, Actor, Cast } = require("./movieModel");

//////create//////

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj);
        return `successfully created ${movieObj.title}`;
    } catch (error) {
        console.log(error);
    }
}

exports.addActor = async (movieObj) => {
    try {
        await Actor.sync();
        await Actor.create(movieObj)
        console.log(`successfully created ${movieobj.name}`);
    } catch (error) {

    }
}

exports.addCast = async (movieObj) => {

    try {
        const actor = await Actor.findOne({ where: { name: movieObj.name } })
        const movie = await Movie.findOne({ where: { title: movieObj.title } })

        await Cast.sync();
        await Cast.create({
            actor_id: actor.id,
            mov_id: movie.id,
            role: movieObj.role
        })

    } catch (error) {
        console.log(error);
    }
}

///////read//////

exports.listAny = async (obj) => {
    try {
        switch (obj.choice) {
            case "movies":
                console.log(await Movie.findAll({}));
                break;
            case "actors":
                console.log(await Actor.findAll({}));
                break;
            case "cast":
                console.log(await Cast.findAll({}));
                break;
            default:
                break;
        }

    } catch (error) {

    }
}


//////update//////

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update({ title: movieObj.newTitle }, { where: { title: movieObj.oldTitle } })
    } catch (error) {
        console.log(error);
    }
}
exports.updateActor = async (movieObj) => {
    try {
        await Actor.update({ [movieObj.key]: movieObj.value }, { where: { name: movieObj.name } })
    } catch (error) {
        console.log(error);
    }
}

//////delete//////

exports.deleteAny = async (movieObj) => {
    try {
        switch (movieObj.choice) {
            case "movie":
                await Movie.destroy({ where: { [movieObj.key]: movieObj.value } })
                break;
            case "actor":
                await Actor.destroy({ where: { [movieObj.key]: movieObj.value } })
                break;
            case "cast":
                await Cast.destroy({ where: { [movieObj.key]: movieObj.value } })
                break;
            default:
                break;
        }
        
    } catch (error) {
        console.log(error);
    }
}

// exports.getID = async (movieObj) => {
//     try {
//         // const find = await Movie.findAll({raw: true}, {attributes: ["id"]}, {plain: true})
//         // // console.log(find[0].dataValue);
//         // console.log(find[0].id);
//         const act_id = await Actor.findOne({ attributes: ["id"] }, { where: { name: movieObj } })
//         console.log(act_id);
//     } catch (error) {
//         console.log(error);

//     }
// }

exports.dropTable = async () => {
    try {
        await Actor.drop()
    } catch (error) {
        console.log(error);
    }
}
//references - code exists in the model file
//to add user 