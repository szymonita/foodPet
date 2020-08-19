class Breed {
  private _displayValue: string;
  private _value: number;
  private _species: string;

  constructor(
    displayValue:string,
    value:number,
    species:string
  ) {
    this._displayValue = displayValue;
    this._value = value;
    this._species = species;
  }

  getDisplayValue() {
    return this._displayValue;
  }

  getValue() {
    return this._value;
  }
}


const Breeds:Breed[] = [
  new Breed("Norvegian", 0, "Cat"),
  new Breed("Typical", 0, "Cat"),
];

export {
  Breed,
  Breeds
}
