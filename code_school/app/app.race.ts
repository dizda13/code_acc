import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts.component';

@Component({
  selector: 'race',
  template: `<h1>{{title | uppercase }}</h1>
            <car-parts></car-parts>`
})

export class AppRace {
  title = 'Ultra Racing';
 }
