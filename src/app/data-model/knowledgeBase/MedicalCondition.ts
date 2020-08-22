import { Spec, Species } from './Species';

class MedicalCondition {
  private _medicalConditionName: string;
  private _medicalConditionCode: number;
  private _species: Spec[];

  constructor(
    medicalConditionName:string,
    medicalConditionCode:number,
    species:Spec[]
  ) {
    this._medicalConditionName = medicalConditionName;
    this._medicalConditionCode = medicalConditionCode;
    this._species = species;
  }

  getMedicalConditionName() {
    return this._medicalConditionName;
  }

  getMedicalConditionCode() {
    return this._medicalConditionCode;
  }

  getSpecies() {
    return this._species;
  }
}

const MedicalConditions:MedicalCondition[] = [
  new MedicalCondition("Tuna alergy", 1, [ Species[0] ]),
  new MedicalCondition("Sterylized", 2, [ Species[0], Species[1] ] )
];

export {
  MedicalCondition,
  MedicalConditions
}
