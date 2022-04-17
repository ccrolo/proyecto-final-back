import express from "express";
import { TravelCtrl, TripsCtrl } from "./trips.controller.js";
import { validateAuth, validateUser } from "../auth/auth.middleware.js";


const TripRouter = express.Router();

TripRouter.route('/')
    .get(TripsCtrl)
    .post(validateAuth, TravelCtrl)





export default TripRouter;