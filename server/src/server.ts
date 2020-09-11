const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

import * as dotenv from 'dotenv';
import PetController from './controllers/PetController';
import { createConnection } from 'typeorm';

const controllers = [
  new PetController()
];

dotenv.config();

const app = express()
              .use(cors())
              .use(bodyParser.json())
              .get('/', (req:any, res:any) => res.send('hello'));

controllers.forEach((controller:any) => {
  app.use('/', controller.router)
});

if (process.env.LISTEN_PORT && process.env.HOSTNAME) {

  app.listen(
    +process.env.LISTEN_PORT, 
    process.env.HOSTNAME, 
    async () =>  { 
      console.log(`Server is running.`);
      await createConnection().then(connection => {
      }).catch(error => console.log(error));
    }
  );

}
