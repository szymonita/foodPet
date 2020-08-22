import { Spec, Species } from './Species';

class Food {
  private _foodName: string;
  private _foodCode: number;
  private _species: Spec[];

  constructor(
    foodName:string,
    foodCode:number,
    species:Spec[]
  ) {
    this._foodName = foodName;
    this._foodCode = foodCode;
    this._species = species;
  }

  getFoodName() {
    return this._foodName;
  }

  getFoodCode() {
    return this._foodCode;
  }

  getSpecies() {
    return this._species;
  }
}

const Foods:Food[] = [
  new Food("Tuna", 1, [ Species[0] ]),
  new Food("Chicken", 2, [ Species[0], Species[1] ] ),
  new Food("Pork", 3, [ Species[1] ] ),
  new Food("Liver", 4, [ Species[0] ] ),
];

export {
  Food,
  Foods
}
