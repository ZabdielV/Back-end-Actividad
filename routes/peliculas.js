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


module.exports=router   