import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
export const collections = {};
export async function connectToDatabase() {
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    collections.products = db.collection(process.env.PRODUCT_COLLECTION);
    collections.users = db.collection(process.env.USER_COLLECTION);
    console.log(`Connected to database: ${db.databaseName} and the collection: ${collections.products.collectionName}`);
    console.log(`Connected to database: ${db.databaseName} and the collection: ${collections.users.collectionName}`);
}
