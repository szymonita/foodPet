const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

import * as dotenv from 'dotenv';
import PetController from './controllers/PetController'

const controllers = [
  new PetController()
];

const app = express()
              .use(cors())
              .use(bodyParser.json())
              .get('/', (req:any, res:any) => res.send('hello'));

controllers.forEach((controller:any) => {
  app.use('/', controller.router)
});

dotenv.config();
if (process.env.LISTEN_PORT && process.env.HOSTNAME) {

  app.listen(
    +process.env.LISTEN_PORT, 
    process.env.HOSTNAME, 
    () =>  { 
      console.log(`Server is running at: http://${process.env.HOSTNAME}:${+process.env.LISTEN_PORT}`);
    }
  );

}

