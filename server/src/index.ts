import express from 'express';
import * as bodyParser from 'body-parser';

import PetController from './controllers/PetController'

const app = express();
const listenToPort = 5000;
const controllers = [
  new PetController()
];

app.use(bodyParser.json());
controllers.forEach((controller) => app.use('/', controller.router));
app.get('/', (req:any, res:any) => res.send('hello'));
app.listen(listenToPort, () => console.log('server is running'));
