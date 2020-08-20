import { Spec, Species } from './Species';

class Breed {
  private _breedName: string;
  private _species: Spec;

  constructor(
    breedName:string,
    species:Spec
  ) {
    this._breedName = breedName;
    this._species = species;
  }

  getBreedName() {
    return this._breedName;
  }

  getSpecies() {
    return this._species;
  }
}

//const cat = new Spec("Cat", 0);
//const dog = new Spec("Dog", 1);

const Breeds:Breed[] = [
  new Breed("Norvegian", Species[0]),
  new Breed("Typical", Species[0]),
  new Breed("Buldog", Species[1]),
  new Breed("Spaniel", Species[1]),
];

export {
  Breed,
  Breeds
}
