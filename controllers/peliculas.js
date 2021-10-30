const Pelicula = require("../models/peliculas")

const mongoose=require("mongoose")

//título, año, director, duración, clasificación

//Create
exports.postAgregarPeliculas = async (req,res)=>{
    
    if( req.body.titulo.length>0 &&
         req.body.year>0 
        &&req.body.director.length>0 
        &&req.body.duracion.length>0 &&
        (req.body.clasificacion==="AA" ||req.body.clasificacion==="A" ) ){

    /* Se busca si existen repetidos, regresa un arreglo con los valores*/
    const repetido= await Carta.find({
        numeracion:req.body.numeracion,
        color: req.body.color,
        paloCarta:req.body.paloCarta,
    })

 if(repetido.length===0){
     console.log("valor no repetido")
     const carta=new Carta(
        {
            numeracion:req.body.numeracion,
            color: req.body.color,
            paloCarta:req.body.paloCarta,
            _id:new mongoose.Types.ObjectId()
        }
                )
            try{
                await carta.save()
                 //console.log(carta)
                console.log("carta registrada exitosamente")
                res.json(
                    {
                        estatus:"carta registrada exitosamente"
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
     const respuesta=await Carta.find()
     res.json(respuesta)
}

//Update
exports.postActualizarPeliculas = async (req,res)=>{
    const respuesta=await Carta.find()
    res.json(respuesta)
}

//Delete
exports.postEliminarPeliculas = async (req,res)=>{
    const respuesta=await Carta.find()
    res.json(respuesta)
}





