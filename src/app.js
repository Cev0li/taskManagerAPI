const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()

// let maitenance = false
// if(maitenance){
//     app.use((req, res, next) => {
//         res.status(503).send('Server under maitenance, come back soon')
//     })
// }

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('YOU AINT GETTIN NOTHIN FROM THIS SERVER')
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app