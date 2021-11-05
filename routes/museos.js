const router=require("express").Router();

const museosController = require("../controllers/museos")

//"id":"617de6e6e81c0c8b58eca07c",

//Create
router.post('/agregarMuseos',museosController.postAgregarMuseos)

//READ 
router.get('/mostrarMuseos',museosController.getMostrarMuseos)

//Update 
router.post('/actualizarMuseos',museosController.postActualizarMuseos)

//Delete
router.post('/eliminarMuseos',museosController.postEliminarMuseos)


module.exports=router   