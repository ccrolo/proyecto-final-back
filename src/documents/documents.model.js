import { MongoClient } from 'mongodb'

const URI = 'mongodb+srv://ccrolo:tLka0jgoWBMZeHyP@clusterproyect.0erol.mongodb.net/finalProject?retryWrites=true&w=majority';


const client = new MongoClient(URI);
const DATABASE_NAME = 'finalProject';
const COLLECTION_NAME = 'documents';


export const createDocus = async (docus) => {
    try{
        await client.connect(); 
        const db = client.db(DATABASE_NAME); 
        const docusCol = db.collection(COLLECTION_NAME); 
        
       return await docusCol.insertOne(docus);
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); 
    }
}

export const retrieveDocus = async () => {
    try{
        await client.connect(); 
        const db = client.db(DATABASE_NAME); 
        const docsCol = db.collection(COLLECTION_NAME); // 
        const opt = {
            projection: { _id:0 }
        }
    
        
        const trips = await docsCol.find({}, opt).toArray(); 
        console.log(docus)
        return docus;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close();
    }
};