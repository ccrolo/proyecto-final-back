import { MongoClient } from 'mongodb'

const URI = 'mongodb+srv://ccrolo:tLka0jgoWBMZeHyP@clusterproyect.0erol.mongodb.net/finalProject?retryWrites=true&w=majority';


const client = new MongoClient(URI);
const DATABASE_NAME = 'finalProject';
const COLLECTION_NAME = 'travels';


export const createTrip = async (travel) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const travelsCol = db.collection(COLLECTION_NAME); // paso 8
        // 
       return await travelsCol.insertOne(travel);// paso 9 
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}