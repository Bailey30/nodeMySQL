const { addMovie, addActor, addCast, listAny, deleteAny, dropTable, getID, updateMovie, updateActor } = require("./movie/movieMethods")
const yargs = require("yargs")


const app = (args) => {
    switch (process.argv[2]) {
        case "addMovie":
            addMovie({ title: args.title, year: args.year })
            break;
        case "addActor":
            addActor({ name: args.name, age: args.age, gender: args.gender })
            break;
        case "addCast":
            addCast({ name: args.name, title: args.title, role: args.role })
            break;
        case "updateMovie":
            updateMovie({ oldTitle: args.oldTitle, newTitle: args.newTitle })
            break;
        case "updateactor": //updates any column in actor table
            updateActor({key: args.key, value: args.value, name: args.name})
            break;
        case "deleteany": //choice = movie/actor/cast - key/value = where name is ... etc
            delete({choice: args.choice, key: args.key, value: args.value})
            break;
        case "list":
            listAny({ choice: args.choice })
            break;
        case "drop":
            dropTable();
            break;
        // case "getID":
        //     getID({ name: args.name });
        //     break;
        default:
            break;
    }
}

app(yargs.argv)