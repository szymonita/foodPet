import { Component, OnInit } from '@angular/core';
import Pet from '../data-model/entities/Pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public pet: Pet;

  constructor() {
    this.pet = new Pet(
      'Bercik',
      1,
      'cat',
      'typical',
      'male',
      ['tuna', 'chicken', 'swine'],
      ['liver', 'not tuna fish'],
      ['none'],
      ['sterylized']
    );

  }

  ngOnInit(): void {
  }

}
