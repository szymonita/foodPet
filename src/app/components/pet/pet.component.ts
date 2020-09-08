import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service'
import Pet from '../../data-model/entities/Pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pets: Observable<Pet[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getPet();
  }

  getPet() {
    this.pets = this.dataService.getPet();
  }

}
