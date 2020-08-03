import { Component, OnInit } from '@angular/core';
import { UpperToolbarComponent } from '../upper-toolbar/upper-toolbar.component';
import { LowerToolbarComponent } from '../lower-toolbar/lower-toolbar.component';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
