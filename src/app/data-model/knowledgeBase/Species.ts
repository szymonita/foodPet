class Spec {
  private _displayValue: string;
  private _value: number;

  constructor(
    displayValue:string,
    value:number
  ) {
    this._displayValue = displayValue;
    this._value = value;
  }

  getDisplayValue() {
    return this._displayValue;
  }

  getValue() {
    return this._value;
  }
}

const Species:Spec[] = [
  new Spec("Cat", 0),
  new Spec("Dog", 1)
];

export {
  Spec,
  Species
}
