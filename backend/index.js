const server = require("./app")
const { database } = require("./src/db/db.js")

database.sync({force : true })
.then( () => {
    server.listen(3001, ()=> console.log('Escuchando al puerto 3001'))
})
.catch(err => {
    console.log(err)
})