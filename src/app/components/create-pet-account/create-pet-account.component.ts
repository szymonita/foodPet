import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { Age, Ages } from '../../data-model/knowledgeBase/Age'
import { Spec, Species } from '../../data-model/knowledgeBase/Species';
import { Breed, Breeds } from '../../data-model/knowledgeBase/Breed';
import { Sex, Sexes } from '../../data-model/knowledgeBase/Sex';
import { Food, Foods } from '../../data-model/knowledgeBase/Food';
import { MedicalCondition, MedicalConditions } from '../../data-model/knowledgeBase/MedicalCondition';


@Component({
  selector: 'app-create-pet-account',
  templateUrl: './create-pet-account.component.html',
  styleUrls: ['./create-pet-account.component.css']
})
export class CreatePetAccountComponent implements OnInit {
  basicPetDataGroup: FormGroup;
  specificPetDataGroup: FormGroup;
  foodPreferencePetDataGroup: FormGroup;
  healthPetDataGroup: FormGroup;

  selectedAge: number;
  ages: Age[];
  species: Spec[];
  breedsUnfiltered: Breed[];
  breedsFiltered: Breed[];
  sexes: Sex[];
  foods: Food[];
  medicalConditions: MedicalCondition[];

  speciesSelected: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ages = Ages;
    this.species = Species;
    this.breedsUnfiltered = Breeds;
    this.breedsFiltered = Breeds;
    this.sexes = Sexes;
    this.foods = Foods;
    this.medicalConditions = MedicalConditions;

    this.speciesSelected = false;

    this.basicPetDataGroup = this.formBuilder.group({
      petName: ['', [
        Validators.required
      ]],
      petAge: ['', [
        Validators.required
      ]]
    });

    this.specificPetDataGroup = this.formBuilder.group({
      petSpecies: ['', [
        Validators.required
      ]],
      petBreed: ['', [
        Validators.required
      ]],
      petSex: ['', [
        Validators.required
      ]]
    });

    this.foodPreferencePetDataGroup = this.formBuilder.group({
      petLikes: [''],
      petDislikes: ['']
    });

    this.healthPetDataGroup = this.formBuilder.group({
      medicalConditions: ['']
    });
  }

  changeSpecies($event) {

    this.breedsFiltered = this.breedsUnfiltered.filter((breed) => {
      return breed.getSpecies().getValue() === $event.value;
    });

    this.speciesSelected = true;

  }

  sendPetData(){}

}
