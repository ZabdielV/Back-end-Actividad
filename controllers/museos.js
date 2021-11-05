//Conexión con el modelo de museos
const Museo = require("../models/museos")
//conexión con mongoose
const mongoose=require("mongoose")

//metodos post y get para hacer las operaciones CRUD

/*
{
"nombre":"Soumaya",
"ubicacion":"CDMX",
"descripcion":"ejemplo",
"tipo":"publico",
"categoria":"artes" 
}
*/


exports.postAgregarMuseos = async (req,res)=>{
    
    if( req.body.nombre.length>0 &&
         req.body.ubicacion.length>0 
        &&req.body.descripcion.length>0 
        &&req.body.tipo.length>0 &&
        req.body.categoria.length>0
        &&(req.body.tipo==="publico" ||req.body.tipo==="privado")&&
        (req.body.categoria==="artes" ||req.body.categoria==="humanidades" ||req.body.categoria==="antropologia")){

    /* Se busca si existen registros repetidos, regresa un arreglo con los valores*/
    const repetido= await Museo.find({
        nombre:req.body.nombre
    })  

 if(repetido.length===0){
     console.log("valor no repetido")
     const museo=new Museo(
        {
            nombre:req.body.nombre,
            ubicacion: req.body.ubicacion,
            descripcion:req.body.descripcion,
            tipo:req.body.tipo,
            categoria:req.body.categoria,
            _id:new mongoose.Types.ObjectId()
        }
                )
            try{
                await museo.save()
                 //console.log(carta)
                console.log("Museo registrado exitosamente")
                res.json(
                    {
                        estatus:"Museo registrada exitosamente"
                    }
                )
                }
                catch(err){
                console.log(err)
                }
 } else{
    console.log("Museo repetido")
    res.json({
        estatus:"Valor repetido en base de datos"
    })
       }

        
      
    }else{
        res.json({
            estatus:"Respuesta invalida"
        })
    }

}

//Read
exports.getMostrarMuseos = async (req,res)=>{
     const respuesta=await Museo.find()
     res.json(respuesta)
}

//Update
exports.postActualizarMuseos = async (req,res)=>{
    try{

        await Museo.findByIdAndUpdate(req.body.id,{
            nombre:req.body.nombre,
            ubicacion: req.body.ubicacion,  
            descripcion:req.body.descripcion,
            tipo:req.body.tipo,
            categoria:req.body.categoria,
        })
        console.log("Museo actualizado")
        res.json({
            estatus:"Valor actualizado correctamente"
        })
    
    }
    catch(err){
        console.log(err)
        res.json({
            estatus:"id no existe o es incorrecto"
        })
    }

}

//Delete
exports.postEliminarMuseos = async (req,res)=>{
    try{
        await Museo.findByIdAndRemove(req.body.id)
        console.log("Museo eliminado")
        res.json({
            estatus:"Valor eliminado correctamente"
        })
    }
    catch(err){
        console.log(err)
        res.json({
            estatus:"id no existe o incorrecto"
        })
    }
}

