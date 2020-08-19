import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Age, Ages } from '../data-model/knowledgeBase/Age'
import { Spec, Species } from '../data-model/knowledgeBase/Species';
import { Breed, Breeds } from '../data-model/knowledgeBase/Breed';
import { Sex, Sexes } from '../data-model/knowledgeBase/Sex';


@Component({
  selector: 'app-create-pet-account',
  templateUrl: './create-pet-account.component.html',
  styleUrls: ['./create-pet-account.component.css']
})
export class CreatePetAccountComponent implements OnInit {
  basicPetDataGroup: FormGroup;
  specificPetDataGroup: FormGroup;

  selectedAge: number;
  ages: Age[];
  species: Spec[];
  breeds: Breed[];
  sexes: Sex[]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ages = Ages;
    this.species = Species;
    this.breeds = Breeds;
    this.sexes = Sexes;

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
  }

  sendPetData(){}

}
