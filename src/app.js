const express = require('express')

const responseHandlers = require('./utils/handleResponses')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('../config').api



const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const upload = require('./utils/multer')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": `${config.host}/api/v1/users`,
        }
    })
})

app.post('/upload-file', upload.single('myImge'), (req,res) => {
    const file = req.file
    res.status(200).json({file})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

app.listen(config.port,() => {
    console.log(`Server started at port ${config.port}`)
})
