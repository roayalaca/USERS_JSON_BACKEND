//importar express
//crear instancia de express

import app from "./app.js"
import {createConnection} from "./database.js"


createConnection()
app.listen(3000)
console.log("Serving is listening on 3000 port")