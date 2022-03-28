import { createDocus, retrieveDocus } from "./documents.model.js"

export const TravelCtrl = async(req,res)=> { //para el post
    try{
        const trips = {
            ...req.body,
            email:req.email

        }
        await createTrip(trips)
        res.status(201).json(trips)
    
    }catch(err){
        console.error('error:', err)
    }
}

export const TripsCtrl  = async(req, res) => { // para el get
    
    const trips = await retrieveTrips(req.email);
    res.json(trips);
};

export const updateFileCtrl = (req,res) => {
    console.log(req.file)
    res.send('Enviado')
}