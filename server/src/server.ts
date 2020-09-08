import express = require('express');
import * as bodyParser from 'body-parser';

import PetController from './controllers/PetController'

const app = express();
const listenToPort = 5000;
const controllers = [
  new PetController()
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.json());

controllers.forEach((controller) => app.use('/', controller.router));

app.get('/', (req:any, res:any) => res.send('hello'));
app.listen(listenToPort, '127.0.0.1', () => console.log('server is running'));
