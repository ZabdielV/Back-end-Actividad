//Modelo 
//Dedinir esquema-> estructura del documento de entrada en la colección
const mongoose=require("mongoose")
//Cuerpo del esquema
//nombre, ubicación, descripción, tipo, clasificación

const MuseoSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required:true
    },
    ubicacion:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },tipo:{//publico p privado
        type:String,
        required:true
    },categoria:{ //artes, humanidades antropologia
        type:String,
        required:true
    }

},{collection:'collection_museos'})
//Crear el modelo a partir del esquema definido. Se crea una coleccion 
module.exports =mongoose.model('museos',MuseoSchema)
