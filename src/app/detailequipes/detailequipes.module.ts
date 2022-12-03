import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailEquipesComponent } from './form-detail-equipes/form-detail-equipes.component';


@NgModule({
  declarations: [
    DetailequipesComponent,
    FormDetailEquipesComponent
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule
  ]
})
export class DetailequipesModule { }
