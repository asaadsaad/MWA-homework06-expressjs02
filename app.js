//1. dependencies
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const morgan = require('morgan')
const courseRouter = require('./routers/coursesRouter')

//2.initialization
const app = express()

//3.setup
app.disable('x-powered-by')

//4. middleware
app.use(morgan('dev'))
// app.use(favicon(path.join(__dirname, 'assets', 'pics', 'stu.jpeg')))
// app.use('/pictures', express.static(__dirname + '/assets/pics'));
app.use(express.json())

//5.routers
app.use('/courses', courseRouter)

app.all('*', (req, res, next) => {
    next(new Error(`Route not found`))
})

//6.error handlers
app.use((error, req, res, next) => {
    res.json({ error: error.message })
})

//7.bootstrap
app.listen(3000, () => console.log('listening to 3000'))
