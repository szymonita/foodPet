export default class Pet {

  name: string;
  age: number;
  species: string;
  race: string;
  sex: string;
  petLikes: string[];
  petDislikes: string[];
  petAlergies: string[];
  petHealthConditions: string[];

  constructor(
    name:string,
    age:number,
    species: string,
    race: string,
    sex: string,
    petLikes: string[],
    petDislikes: string[],
    petAlergies: string[],
    petHealthConditions: string[]
  ) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.race = race;
    this.sex = sex;
    this.petLikes = petLikes;
    this.petDislikes = petDislikes;
    this.petAlergies = petAlergies;
    this.petHealthConditions = petHealthConditions;
  }

  /* getters */

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getSpecies() {
    return this.species;
  }

  getRace() {
    return this.race;
  }

  getPetLikes() {
    return this.petLikes;
  }

  getPetDislikes() {
    return this.petDislikes;
  }

  getPetAlergies() {
    return this.petAlergies;
  }

  getPetHealthConditions() {
    return this.petHealthConditions;
  }

  /* setters */

  setName(name:string):void {
    this.name = name;
  }

  setAge(age:number):void {
    this.age = age;
  }

  setSpecies(species:string):void {
    this.species = species;
  }

  setRace(race:string):void {
    this.race = race;
  }

  setPetLikes(petLikes:string[]):void {
    this.petLikes = petLikes;
  }

  setPetDislikes(petDislikes:string[]):void {
    this.petDislikes = petDislikes;
  }

  setPetAlergies(petAlergies:string[]):void {
    this.petAlergies = petAlergies;
  }

  setPetHealthConditions(petHealthConditions:string[]) {
    this.petHealthConditions = petHealthConditions;
  }

}
