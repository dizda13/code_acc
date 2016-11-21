import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRace }   from './app.race';
import { CarPartsComponent } from './car-parts.component';
import { FormsModule } from '@angular/forms';
import { RacingDataService } from './racing-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
   imports:      [ BrowserModule, FormsModule, HttpModule],
   declarations: [ AppRace, CarPartsComponent ],
   bootstrap:    [ AppRace ],
   providers: [ RacingDataService ]
})
export class AppModule { }
