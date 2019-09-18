import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { PruebaComponent } from './prueba/prueba.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { ComponentServiceComponent } from './component-service/component-service.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GeneralComponent } from './general/general.component'
; 


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ComponentServiceComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule { }
