import express from "express";
import { TravelCtrl } from "./trips.controller.js";


const TripRouter = express.Router();

TripRouter.route('/:id') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .put(TravelCtrl)
    
  
    export default TripRouter;