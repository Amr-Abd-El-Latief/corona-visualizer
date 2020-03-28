import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home.page';
import { MaterialModule } from '../material.module';

//app components

import {TableComponent} from '../table/table.component';
import {ChartsComponent} from '../charts/charts.component';
import {WorldMapComponent} from '../world-map/world-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
    ,
    MaterialModule,
    ReactiveFormsModule,HttpClientModule
  ],
  declarations: [HomePage,TableComponent,ChartsComponent,WorldMapComponent]
})
export class HomePageModule {}
