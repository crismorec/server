const mongoose = require('mongoose')

mongoose
    //.connect('mongodb://localhost/garaje-live-coding')
    .connect('mongodb://mongo:2P7YU1HG4vadfspf0dyZ@containers-us-west-144.railway.app:6512')
    //.connect('mongodb://mongo:utX51FSLuAir7L5oPSUQ@containers-us-west-189.railway.app:7597')
    .then(() => console.log(' *** b. CONECTADO A BD'))

const coasterSchema = mongoose.Schema({
    //title: String, 
    title: {
        type: String,
        required: true
    },
    description: String,
    inversions: Number,
    length: Number,
    imageUrl: String
})

const Coaster = mongoose.model('coaster', coasterSchema)

module.exports = Coaster