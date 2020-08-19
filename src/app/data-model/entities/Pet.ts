export default class Pet {

  private _name: string;
  private _age: number;
  private _species: string;
  private _race: string;
  private _sex: string;
  private _petLikes: string[];
  private _petDisLikes: string[];
  private _petAlergies: string[];
  private _petHealthConditions: string[];

  constructor(
    name:string,
    age:number,
    species: string,
    race: string,
    sex: string,
    petLikes: string[],
    petDisLikes: string[],
    petAlergies: string[],
    petHealthConditions: string[]
  ) {
    this._name = name;
    this._age = age;
    this._species = species;
    this._race = race;
    this._sex = sex;
    this._petLikes = petLikes;
    this._petDisLikes = petDisLikes;
    this._petAlergies = petAlergies;
    this._petHealthConditions = petHealthConditions;
  }

  /* getters */

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  getSpecies() {
    return this._species;
  }

  getRace() {
    return this._race;
  }

  getPetLikes() {
    return this._petLikes;
  }

  getPetDislikes() {
    return this._petDisLikes;
  }

  getPetAlergies() {
    return this._petAlergies;
  }

  getPetHealthConditions() {
    return this._petHealthConditions;
  }

  /* setters */

  setName(name:string):void {
    this._name = name;
  }

  setAge(age:number):void {
    this._age = age;
  }

  setSpecies(species:string):void {
    this._species = species;
  }

  setRace(race:string):void {
    this._race = race;
  }

  setPetLikes(petLikes:string[]):void {
    this._petLikes = petLikes;
  }

  setPetDislikes(petDisLikes:string[]):void {
    this._petDisLikes = petDisLikes;
  }

  setPetAlergies(petAlergies:string[]):void {
    this._petAlergies = petAlergies;
  }

  setPetHealthConditions(petHealthConditions:string[]) {
    this._petHealthConditions = petHealthConditions;
  }

}
