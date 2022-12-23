const express = require('express')

// 1. Crear la aplicación
const app = express()

// 6. configuración CORS
// CORS
const cors = require('cors')
// app.use(cors())
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration


// 2. levantar el servidor en el puerto 5005
app.listen(5005, () => console.log('     *** a. SERVIDOR LEVANTADO'))

// 3. realiza el enrutamiento conforme a la url
// Routing

app.get('/productos', (req, res) => res.send('<h1>Hola MinTic 2022...</h1>'))

app.get('/productosjson', (req, res) => res.json({
    message: 'Hola desde Json',
    date: new Date(),
    campues: "Bucaramanga"
}))

app.get('/api/coasters', (req, res) => {
    //app.get('/api/coasters', (res) => { // TypeError: res.json is not a function
    // console.log('@@ inside /api/coasters')
    Coaster
        .find() // bd.collectionName.find()
        //.then(allCoasters => console.log(allCoasters))
        .then(allCoasters => res.json(allCoasters)) // solicitud asincrona

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
})

app.get('/api/details/:coaster_id', (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(coaster => res.json(coaster))

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
})

app.get('/api/languages', (req, res) => {
    //app.get('/api/coasters', (res) => { // TypeError: res.json is not a function
    // console.log('@@ inside /api/coasters')
    Language
        .find()
        //.then(allCoasters => console.log(allCoasters))
        .then(allLanguages => res.json(allLanguages))
})

app.get('/api/detailsLanguages/:language_id', (req, res) => {

    const { language_id } = req.params

    Language
        .findById(language_id)
        .then(language => res.json(language))
})

// 4. Conexión a la Base de Datos
// DB connection
// todo: llevar este código al modelo
// const mongoose = require('mongoose')
// mongoose
//     .connect('mongodb://localhost/garaje-live-coding')
//     .then(() => console.log(' *** b. CONECTADO A BD'))
// Crear una conexión a una base de datos MongoDB
// mongoose
//     .connect('mongodb://localhost/coaster_api', function (error) {
//         if (error) throw error;
//         console.log(' *** b. CONECTADO A BD');
//     });


// 5. llamado del modelo posterior creación
// Model
const Coaster = require('./Models/Coaster.model')
const Language = require('./Models/Language.model')



// app.all('*', function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// })
