import * as express from 'express';
import Pet from '../../../src/app/data-model/Pet';

export class PetController {
  public path = '/api/pet';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(`${this.path}/getPet`, this.getPet);
  }

  getPet(request: express.Request, response: express.Response) {
      const pet = new Pet(
        'Bercik',
        1,
        'cat',
        'typical',
        'male',
        ['tuna', 'chicken', 'pork'],
        ['liver', 'not tuna fish'],
        ['none'],
        ['sterylized']
      );
      response.send(pet);
  }
}

export default PetController;