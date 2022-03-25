import { createTrip } from "./trips.model.js";

export const TravelCtrl = async(req,res)=> { //para el post
    try{
        const trips = {
            ...req.body
        }
        await createTrip(trips)
        res.status(201).json(trips)
    
    }catch(err){
        console.error('error:', err)
    }
}