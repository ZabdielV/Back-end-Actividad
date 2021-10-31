const Pelicula = require("../models/peliculas")

const mongoose=require("mongoose")

//título, año, director, duración, clasificación

//Create
exports.postAgregarPeliculas = async (req,res)=>{
    
    if( req.body.titulo.length>0 &&
         req.body.year>0 
        &&req.body.director.length>0 
        &&req.body.duracion.length>0 &&
        (req.body.clasificacion==="A" ||req.body.clasificacion==="B" 
        ||req.body.clasificacion==="B15"||req.body.clasificacion==="C") ){

    /* Se busca si existen registros repetidos, regresa un arreglo con los valores*/
    const repetido= await Pelicula.find({
        titulo:req.body.titulo
    })  

 if(repetido.length===0){
     console.log("valor no repetido")
     const pelicula=new Pelicula(
        {
            titulo:req.body.titulo,
            year: req.body.year,
            director:req.body.director,
            duracion:req.body.duracion,
            clasificacion:req.body.clasificacion,
            _id:new mongoose.Types.ObjectId()
        }
                )
            try{
                await pelicula.save()
                 //console.log(carta)
                console.log("Pelicula registrada exitosamente")
                res.json(
                    {
                        estatus:"Pelicula registrada exitosamente"
                    }
                )
                }
                catch(err){
                console.log(err)
                }
 } else{
    console.log("valor repetido")
    res.json({
        estatus:"valor repetido en base de datos"
    })
       }

        
      
    }else{
        res.json({
            estatus:"respuesta invalida"
        })
    }

}

//Read
exports.getMostrarPeliculas = async (req,res)=>{
     const respuesta=await Pelicula.find()
     res.json(respuesta)
}

//Update
exports.postActualizarPeliculas = async (req,res)=>{
    try{

        await Pelicula.findByIdAndUpdate(req.body.id,{
            titulo:req.body.titulo,
            year: req.body.year,
            director:req.body.director,
            duracion:req.body.duracion,
            clasificacion:req.body.clasificacion
        })
        console.log("valor actualizado")
        res.json({
            estatus:"valor actualizado correctamente"
        })
    
    }
    catch(err){
        console.log(err)
        res.json({
            estatus:"id no existe o incorrecto"
        })
    }

}

//Delete
exports.postEliminarPeliculas = async (req,res)=>{
    try{
        await Pelicula.findByIdAndRemove(req.body.id)
        console.log("Pelicula eliminada")
        res.json({
            estatus:"valor eliminado correctamente"
        })
    }
    catch(err){
        console.log(err)
        res.json({
            estatus:"id no existe o incorrecto"
        })
    }
}





