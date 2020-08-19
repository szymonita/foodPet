class Age {
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

const Ages:Age[] = [
  new Age("Less than year", 0),
  new Age("1-2 years", 1),
  new Age("3-7", 2),
  new Age("8 and more", 3)
];

export {
  Age,
  Ages
}
