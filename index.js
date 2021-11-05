const express=require("express")
const mongoose=require("mongoose")


//Traer los modulos
const peliculasRoutes=require("./routes/peliculas")
const museosRoutes = require("./routes/museos")

const app=express()

//Agregar middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Agregar la ruta principal
app.use("/peliculas",peliculasRoutes)
app.use("/museos",museosRoutes)

mongoose.connect('mongodb://user7:root@54.227.9.233:27017/base07?authSource=admin').then(
()=>{
    //console.log("Conexion Exitosa")
    app.listen(8082,()=>{
        console.log("Servidor en linea")
    })
}


).catch( err=>{console.log(err)})

//node index.js
//npm i express
//mongodb://localhost:27017/test
//'mongodb://user7:root@54.227.9.233:27017/base07?authSource=admin'