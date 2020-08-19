class Sex {
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

const Sexes:Sex[] = [
  new Sex("Female", 0),
  new Sex("Male", 1)
];

export {
  Sex,
  Sexes
}
