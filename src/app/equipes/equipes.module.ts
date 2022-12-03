import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { FormEquipesComponent } from './form-equipes/form-equipes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipesComponent,
    FormEquipesComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule
  ]
})
export class EquipesModule { }
