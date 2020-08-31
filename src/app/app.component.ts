import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimation } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideAnimation
  ],
  host: { '[@slideAnimation]': '' }
})
export class AppComponent {
  title = 'FoodPet';
}
