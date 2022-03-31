import { MongoClient } from 'mongodb'
const {CB} =process.env

const URI = `mongodb+srv://ccrolo:tLka0jgoWBMZeHyP@clusterproyect.0erol.mongodb.net/finalProject?retryWrites=true&w=majority`;


const client = new MongoClient(URI);
const DATABASE_NAME = 'finalProject';
const COLLECTION_NAME = 'travels';


export const createTrip = async (travel) => {
    try{
        await client.connect(); 
        const db = client.db(DATABASE_NAME); 
        const travelsCol = db.collection(COLLECTION_NAME); 
        
       return await travelsCol.insertOne(travel);
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); 
    }
}

export const retrieveTrips = async () => {
    try{
        await client.connect(); 
        const db = client.db(DATABASE_NAME); 
        const tripsCol = db.collection(COLLECTION_NAME); // 
        const opt = {
            projection: { _id:0 }
        }
    
        
        const trips = await tripsCol.find({}, opt).toArray(); 
        console.log(trips)
        return trips;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close();
    }
};