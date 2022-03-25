import express from "express";
import { TravelCtrl } from "./trips.controller.js";


const TripRouter = express.Router();

TripRouter.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(TravelCtrl)
    
  
    export default TripRouter;