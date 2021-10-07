import dotenv from 'dotenv';

dotenv.config();

export const MONGO_ATLAS_SRV = process.env.MONGO_ATLAS_SRV ||'mongodb+srv://admin:admin@cluster0.6d6g8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
export const PORT = process.env.PORT || 8080