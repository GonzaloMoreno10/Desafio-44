import MongoStore from 'connect-mongo';
import {MONGO_ATLAS_SRV} from '../config/venv';
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

export const StoreOptions = {

  store: MongoStore.create({
    mongoUrl: MONGO_ATLAS_SRV,
    mongoOptions: advancedOptions,
  }),


  secret: 'mySecretSession',
  resave: false,
  saveUninitialized: false ,
};