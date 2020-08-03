import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-toolbar',
  templateUrl: './lower-toolbar.component.html',
  styleUrls: ['./lower-toolbar.component.css']
})
export class LowerToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  year(): number {
    let today: Date = new Date();
    let currentYear: number = today.getFullYear();

    return currentYear;
  }

}
