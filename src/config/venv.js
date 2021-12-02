import dotenv from 'dotenv';

dotenv.config();

export const MONGO_ATLAS_SRV = process.env.MONGO_ATLAS_SRV;
export const PORT = process.env.PORT || 8080;
export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
export const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;
export const ETHEREAL_NAME = process.env.ETHEREAL_NAME;
export const ETHEREAL_EMAIL = process.env.ETHEREAL_EMAIL;
export const ETHEREAL_PASSWORD = process.env.ETHEREAL_PASSWORD;
export const TIPO_DS = process.env.TIPO_DS;
