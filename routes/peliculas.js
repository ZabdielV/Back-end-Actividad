const router=require("express").Router();

const peliculaController = require("../controllers/peliculas")

//Create
router.post('/agregarPeliculas',peliculaController.postAgregarPeliculas)

//READ 
router.get('/mostrarPeliculas',peliculaController.getMostrarPeliculas)

//Update 
router.post('/actualizarPeliculas',peliculaController.postActualizarPeliculas)

//Delete
router.post('/eliminarPeliculas',peliculaController.postEliminarPeliculas)

/*
{
"titulo":"shrek",
"year":2010,
"director":"Mike Mitchell",
"duracion":"1:30:00",
"clasificacion":"A"
}

*/
module.exports=router   