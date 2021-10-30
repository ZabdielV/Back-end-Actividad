const mongoose=require("mongoose")
//título, año, director, duración, clasificación
//Definir esquema    
const PeliculaSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    titulo:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    director:{
        type:String,
        required:true
    },duracion:{
        type:String,
        required:true
    },clasificacion:{
        type:String,
        required:true
    }

},{collection:'collection_peliculas'})
//Crear el modelo a partir del esquema definido. Se crea una coleccion 
module.exports =mongoose.model('pelicula',PeliculaSchema)