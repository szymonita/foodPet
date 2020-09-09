const express = require('express');
import * as dotenv from 'dotenv';
const cors = require('cors')
const bodyParser = require('body-parser');
import PetController from './controllers/PetController'

const app = express();
dotenv.config();

const controllers = [
  new PetController()
];

app.use(cors());
app.use(bodyParser.json());

controllers.forEach((controller) => app.use('/', controller.router));

if (process.env.LISTEN_PORT) {
  app.get('/', (req:any, res:any) => res.send('hello'));
  app.listen(
    +process.env.LISTEN_PORT, 
    '127.0.0.1', 
    () =>  { 
      console.log('server is running');
    }
  );
}

