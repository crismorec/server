// import { PORT } from "./config";

const express = require('express')
const app = express()
// app.listen(5005, () => console.log('*** a. SERVIDOR LEVANTADO'))
app.listen(process.env.PORT || 5005, () => console.log('*** a. SERVIDOR LEVANTADO'))

const Coaster = require('./Models/Coaster.model')
const Language = require('./Models/Language.model')

// 6. configuración CORS
const cors = require('cors')
app.use(cors()) // middleware
// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionSuccessStatus: 200,
// }
// app.use(cors(corsOptions)) // Use this after the variable declaration

// app.use(cors({
//     origin: '/api/coasters',
//     methods: ['GET', 'POST']
// }));


// 3. realiza el enrutamiento conforme a la URL - Routing
app.get('/api/coasters', (req, res) => {
    Coaster
        .find()
        .then(allCoasters => res.json(allCoasters)) // solicitud asincrona
})

app.get('/api/details/:coaster_id', (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(coaster => res.json(coaster))
})

app.get('/api/languages', (req, res) => {
    Language
        .find()
        .then(allLanguages => res.json(allLanguages))
})

app.get('/api/detailsLanguages/:language_id', (req, res) => {

    const {
        language_id
    } = req.params

    Language
        .findById(language_id)
        .then(language => res.json(language))
})